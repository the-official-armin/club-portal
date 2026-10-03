# How to add a new member

There are two sides: **the new member** and **the admin**. Follow the steps for your role.

---

## Part 1 — New member (you)

**Step 1. Make a GitHub account (free).**
Go to https://github.com/signup and sign up. Pick a username you can recognize, for example `jane-smith-2027`.

**Step 2. Send your username to the admin.**
Email or message the admin your GitHub username. Do not send a password.

**Step 3. Accept the invitation.**
The admin will invite you to the club's GitHub repository. GitHub sends an email titled "invited you to collaborate". Click **View invitation** → **Accept invitation**.
You can also find it at https://github.com/notifications.

**Step 4. Check that you can see the site.**
Open https://the-official-armin.github.io/club-portal/ and look for your name in the Members tab. If it is not there yet, the admin still needs to add you to the data file (Part 2 below).

When you are done, read [Update your project](update-your-project.md) to learn how to keep your project up to date.

---

## Part 2 — Admin (adds the member)

**Step 1. Invite the new member to the repository.**
1. Open https://github.com/the-official-armin/club-portal
2. Click **Settings** (top right tab) → **Collaborators** (left menu) → **Add people**
3. Type the member's GitHub username → choose **Write** access → **Add**
4. Wait for them to accept (step 3 of Part 1)

**Step 2. Add them to the member list.**
1. Open the file `data/members.json`
2. Click the **pencil icon** (Edit this file)
3. Add a new entry after the last `}` — copy this and fill in the details:

```json
    {
      "name": "Jane Smith",
      "role": "Member",
      "grade": "11"
    }
```

Be careful: put a **comma** after the `}` of the entry above it, and **no comma** after the last entry.

**Step 3. Submit the change.**
1. Scroll down to **Propose changes** (or **Commit changes**)
2. Choose **Create a new branch for this commit and start a pull request**
3. Click **Propose changes**, then **Create pull request**
4. Wait for the "Check data files" check to show a green ✓
5. Click **Merge pull request** → **Confirm merge**

The Members tab updates within a minute or two.

**If you add the member to a project too,** also edit `data/projects.json` and add their name to that project's `"team"` list (see [Admin guide](admin-guide.md)).
