# Admin guide

For the person who manages the club portal. Members follow the other guides.

## How changes flow

```
Member edits file → Pull Request (a proposed change) → Check runs → Admin approves → Merged → Website updates
```

The `main` branch is protected: nobody can change it directly, not even the admin without a review. The check (`.github/workflows/check-data.yml`) catches broken files before they go live.

## Approving a change

1. Go to https://github.com/the-official-armin/club-portal/pulls
2. Open the change. Click **Files changed** to see what was edited.
3. Confirm it only touches that member's own project (or their own details).
4. Make sure the **Check data files** check is green ✅
5. Click **Review changes** → choose **Approve** → **Submit**
6. Click **Merge pull request** → **Confirm merge**

## Adding or removing a member

- **Add:** follow Part 2 of [Add a member](add-a-member.md)
- **Remove a member's access:** Settings → Collaborators → click the member → **Remove access**
- **Remove them from the list:** edit `data/members.json` in a pull request, the same way as adding them

## Giving a member a project

Open `data/projects.json` and put the member's name in the `"team"` list of that project. The name must match exactly the `"name"` in `data/members.json`.

## Setup (already done — for reference)

- **Hosting:** GitHub Pages, serving the `main` branch from the root folder (Settings → Pages)
- **Branch protection:** `main` requires a pull request with 1 approval (Settings → Branches)
- **Repository visibility:** public. GitHub Pages on a free account needs a public repository.

## Privacy

The website is **public** — anyone with the link can see it. Keep it to what is needed:

- ✅ Good: full name, role, grade, project names (the club has chosen to show full names)
- ❌ Avoid: phone numbers, home addresses, personal emails, photos without parental permission

## Fixing a broken site

If the Members or Projects tab says *"Could not load the data"*:

1. Go to the **Actions** tab on GitHub and open the latest **Check data files** run to see the error
2. Or open the data file and look for a missing comma `,`, quotation mark `"`, or bracket
3. Fix it with a new pull request, or revert the last merged change: open the merged pull request and click **Revert**
