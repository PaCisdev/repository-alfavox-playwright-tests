# AlfaVox Playwright Tests

This repository contains Playwright-based smoke and regression tests for the AlfaVox application.

## Prerequisites

- Node.js 18 or later
- npm

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Run tests

```bash
npm test
npm run test:smoke
npm run test:headed
```

## View HTML report

```bash
npm run test:report
```

## Publish the repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

Replace `<your-repository-url>` with the URL of your GitHub, GitLab, or Azure DevOps repository.
