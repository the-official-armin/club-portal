// Loads the two data files and draws the member and project cards.
// Data lives in data/members.json and data/projects.json.

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

// "Zhenkai (Kai) Fu" -> "ZF" (ignores anything in brackets)
function initials(name) {
  const words = String(name).replace(/\(.*?\)/g, "").trim().split(/\s+/);
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

// Groups items by a field, keeping the order they first appear in
function groupBy(items, field) {
  const groups = new Map();
  items.forEach(item => {
    const key = item[field] || "Other";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  return groups;
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

function renderStats(members, projects) {
  const active = projects.filter(p => p.status !== "Done").length;
  document.getElementById("stats").innerHTML = `
    <span class="stat"><strong>${members.length}</strong> members</span>
    <span class="stat"><strong>${projects.length}</strong> projects</span>
    <span class="stat"><strong>${active}</strong> active</span>`;
}

function renderMembers(members, projects) {
  const groups = [...groupBy(members, "role")].map(([role, list]) => {
    const cards = list.map(m => {
      const onProjects = projects
        .filter(p => (p.team || []).includes(m.name))
        .map(p => `<span class="chip">${esc(p.name)}</span>`)
        .join("");

      return `
        <article class="card">
          <div class="avatar" aria-hidden="true">${esc(initials(m.name))}</div>
          <div>
            <h3>${esc(m.name)}</h3>
            <div class="meta">Grade ${esc(m.grade)}</div>
          </div>
          <div class="chips">${onProjects || '<span class="meta">No project yet</span>'}</div>
        </article>`;
    }).join("");

    return `
      <div class="group">
        <h2 class="group-title">${esc(role)} <span class="count">${list.length}</span></h2>
        <div class="grid">${cards}</div>
      </div>`;
  }).join("");

  document.getElementById("members-content").className = "";
  document.getElementById("members-content").innerHTML = groups || "<p class='meta'>No members yet.</p>";
}

function renderProjects(projects) {
  const cards = projects.map(p => `
    <article class="card project-card">
      <div class="top">
        <h3>${esc(p.name)}</h3>
        <span class="badge ${statusClass(p.status)}">${esc(p.status)}</span>
      </div>
      <p class="card-desc">${esc(p.description)}</p>
      <dl>
        <dt>Lead</dt><dd>${esc(p.lead)}</dd>
        <dt>Next step</dt><dd>${esc(p.next_step)}</dd>
        <dt>Updated</dt><dd>${esc(p.updated)}</dd>
      </dl>
      <div>
        <div class="label">Team</div>
        <div class="chips">${(p.team || []).map(n => `<span class="chip">${esc(n)}</span>`).join("")}</div>
      </div>
    </article>`).join("");

  document.getElementById("projects-content").className = "";
  document.getElementById("projects-content").innerHTML =
    `<div class="grid">${cards || "<p class='meta'>No projects yet.</p>"}</div>`;
}

async function loadData() {
  try {
    const [membersRes, projectsRes] = await Promise.all([
      fetch("data/members.json"),
      fetch("data/projects.json"),
    ]);
    const members = (await membersRes.json()).members;
    const projects = (await projectsRes.json()).projects;

    renderStats(members, projects);
    renderMembers(members, projects);
    renderProjects(projects);
  } catch (error) {
    const message = "Could not load the data. Check that data/members.json and data/projects.json are valid (see the how-to guides).";
    document.getElementById("members-content").textContent = message;
    document.getElementById("projects-content").textContent = message;
    console.error(error);
  }
}

window.addEventListener("hashchange", () => showTab(currentTab()));
showTab(currentTab());
loadData();
