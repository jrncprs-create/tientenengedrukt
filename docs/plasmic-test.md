# Plasmic test route

This project includes a safe Plasmic test route at `/plasmic-test`.

Required local environment variables:

```bash
PLASMIC_PROJECT_ID=
PLASMIC_PROJECT_TOKEN=
```

Add the same variables in Vercel for Production, Preview, and Development if the test route should render published Plasmic content after deployment.

If the variables are missing, or if no Plasmic page is available for `/plasmic-test`, the route renders:

```text
Plasmic test page not configured yet.
```
