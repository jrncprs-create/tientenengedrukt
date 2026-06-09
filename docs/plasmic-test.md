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

## Host app

Use this host app URL in Plasmic:

```text
https://tientenengedrukt.vercel.app/plasmic-host
```

## Custom components

The host app registers editorial React components that reuse the existing
Next.js portfolio classes and layout patterns. In Plasmic Studio, open the
Insert panel and look for these custom components:

- `Editorial Hero`
- `Editorial Statement`
- `Editorial Text Block`
- `Editorial Contact Block`
- `Editorial Project Index`

## Editable props

`Editorial Hero`

- `kicker`
- `title`
- `intro`
- `note`

`Editorial Statement`

- `label`
- `text`

`Editorial Text Block`

- `eyebrow`
- `title`
- `body`

`Editorial Contact Block`

- `title`
- `email`
- `location`
- `text`

`Editorial Project Index`

- `heading`
- `intro`

The project index uses the local fallback project data for this test.

## Publish and test

1. In Plasmic Studio, set the host app URL to `/plasmic-host`.
2. Insert one or more custom components on the page with path `/plasmic-test`.
3. Adjust props in the right sidebar.
4. Publish the Plasmic project.
5. Open `/plasmic-test` on the deployed site.
