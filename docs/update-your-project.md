# How to update your project

You can change **your own** project's status, next step, description, and date. You do this by editing `data/projects.json` on GitHub and sending the change to the admin for approval.

You need a GitHub account and must have accepted the invitation first. See [Add a member](add-a-member.md), Part 1.

---

## Step 1. Open the project file

1. Go to https://github.com/the-official-armin/club-portal
2. Click the **data** folder, then click **projects.json**

## Step 2. Click the pencil

Click the **pencil icon** (✏️ *Edit this file*) at the top right of the file.

## Step 3. Find your project

Your project looks like this. Look for your project's name:

```json
    {
      "name": "Sample Project",
      "description": "Replace this with a one-line summary of the project.",
      "lead": "Sample Student",
      "team": ["Sample Student", "Another Student"],
      "status": "In Progress",
      "next_step": "Pick a date for the first meeting",
      "updated": "2026-10-02"
    }
```

## Step 4. Change only the words inside the quotation marks

| Field | What to write | Example |
|---|---|---|
| `description` | One short sentence about the project | `"Build a robot for the spring fair."` |
| `status` | **One** of: `Planning`, `In Progress`, `On Hold`, `Done` | `"In Progress"` |
| `next_step` | What happens next | `"Order the motors"` |
| `updated` | Today's date, as year-month-day | `"2026-10-15"` |

**Do not** delete the quotation marks `"`, the commas `,`, or the curly brackets `{ }`.

## Step 5. Send the change for approval

1. Scroll down to **Commit changes…**
2. Write a short note in the first box, for example: `Updated robot status`
3. Select **Create a new branch for this commit and start a pull request**
4. Click **Propose changes**
5. Click **Create pull request**, then **Create pull request** again

Your change is now waiting for the admin to check. You do not have to do anything else.

## Step 6. Wait for the check

A check called **Check data files** runs automatically.
- ✅ **Green check** — good. The admin can approve it.
- ❌ **Red X** — something is wrong (usually a missing comma or quotation mark). Click **Details** to see the message, or ask the admin for help.

## Step 7. Look at the result

After the admin approves and merges, your project updates on the website within a minute or two:
https://the-official-armin.github.io/club-portal/#projects

---

## Adding a brand-new project

Ask the admin first. The admin will add a new entry with you as the `lead`. Then you can update it yourself with the steps above.

If you need a template to copy, use this, placed after the last project entry (remember the comma):

```json
    {
      "name": "New Project Name",
      "description": "One-line summary",
      "lead": "Your Name",
      "team": ["Your Name"],
      "status": "Planning",
      "next_step": "First step",
      "updated": "2026-10-02"
    }
```

## Common mistakes

| Problem | Fix |
|---|---|
| Red X on the check | Look for a missing `,` between entries, or a missing `"` |
| Status not showing as a colored badge | Use exactly `Planning`, `In Progress`, `On Hold`, or `Done` (capital letters matter) |
| Changes not visible on the site | Wait 2 minutes and refresh. Make sure the change was merged |
