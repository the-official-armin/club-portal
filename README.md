# Programming/AI Club Portal

A simple website for our club. It shows the **members** and the **projects** list.

**Live site:** https://the-official-armin.github.io/club-portal/

## How it works (in one minute)

- The website is the page you see. You never need to change it.
- All the information lives in two small files in the `data` folder:
  - `data/members.json` — the member list
  - `data/projects.json` — the projects and their status
- To change information, you edit one of those files on GitHub. The website updates itself a minute or two later.

## How-to guides

Start with the one that matches what you want to do:

| I want to... | Read this |
|---|---|
| Add a new member | [Add a member](docs/add-a-member.md) |
| Update my project (status, next step, etc.) | [Update your project](docs/update-your-project.md) |
| Add or fix things as the admin (approve changes, etc.) | [Admin guide](docs/admin-guide.md) |

## Golden rules

1. **Never** edit the file directly on the `main` branch. Always make a **change request** (also called a *Pull Request*). The guides show you how.
2. Only change **your own** project entry.
3. Keep the quotation marks `"` and commas `,` exactly as they are in the examples.
4. When in doubt, ask the admin before you submit. Nothing is lost by asking.

## Status words

Use **exactly** one of these four words for a project's status:

- `Planning` — we are deciding what to do
- `In Progress` — work is happening
- `On Hold` — paused for now
- `Done` — finished
