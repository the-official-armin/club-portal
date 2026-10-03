// Loads the two data files and draws the tables.
// Members and projects come from data/members.json and data/projects.json.

// Escape text so it is shown as plain text, never as HTML
function esc(value) {
  const div = document.createElement("div");
  div.textContent = value ?? "";
  return div.innerHTML;
}

// "In Progress" -> "status-in-progress" (the colored badge style)
function statusClass(status) {
  return "status-" + String(status).toLowerCase().replace(/\s+/g, "-");
}

function showTab(name) {
  document.querySelectorAll(".panel").forEach(panel => {
    panel.hidden = panel.id !== name;
  });
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === name);
  });
}

function currentTab() {
  const name = location.hash.replace("#", "");
  return ["members", "projects"].includes(name) ? name : "members";
}

function renderMembers(members, projects) {
  const rows = members.map(m => {
    // Find every project this member is on the team of
    const their = projects
      .filter(p => (p.team || []).includes(m.name))
      .map(p => esc(p.name))
      .join(", ") || "<span class='muted'>None yet</span>";

    return `<tr>
      <td><strong>${esc(m.name)}</strong></td>
      <td>${esc(m.role)}</td>
      <td>${esc(m.grade)}</td>
      <td>${their}</td>
    </tr>`;
  }).join("");

  document.getElementById("members-table").innerHTML = `
    <div class="table-wrap"><table>
      <thead><tr><th>Name</th><th>Role</th><th>Grade</th><th>Projects</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
}

function renderProjects(projects) {
  const rows = projects.map(p => `<tr>
      <td>
        <strong>${esc(p.name)}</strong>
        <div class="muted">${esc(p.description)}</div>
      </td>
      <td>${esc(p.lead)}</td>
      <td><span class="badge ${statusClass(p.status)}">${esc(p.status)}</span></td>
      <td>${esc(p.next_step)}</td>
      <td>${esc(p.updated)}</td>
    </tr>`).join("");

  document.getElementById("projects-table").innerHTML = `
    <div class="table-wrap"><table>
      <thead><tr><th>Project</th><th>Lead</th><th>Status</th><th>Next step</th><th>Last updated</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
}

async function loadData() {
  try {
    const [membersRes, projectsRes] = await Promise.all([
      fetch("data/members.json"),
      fetch("data/projects.json"),
    ]);
    const members = (await membersRes.json()).members;
    const projects = (await projectsRes.json()).projects;

    renderMembers(members, projects);
    renderProjects(projects);
  } catch (error) {
    const message = "Could not load the data. Check that data/members.json and data/projects.json are valid (see the how-to guides).";
    document.getElementById("members-table").textContent = message;
    document.getElementById("projects-table").textContent = message;
    console.error(error);
  }
}

window.addEventListener("hashchange", () => showTab(currentTab()));
showTab(currentTab());
loadData();
