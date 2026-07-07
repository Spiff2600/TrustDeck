import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

const SITE_URL = "https://51788e7b5d36a9ddc6ebfa851d392fdf.ctonew.app";
const OG_IMAGE =
  "https://raw.githubusercontent.com/Spiff2600/TrustDeck/main/assets/social-preview.png";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "TrustDeck — Security Questionnaire Response Team",
      },
      {
        name: "description",
        content:
          "Five-agent AI team that answers vendor security questionnaires from your actual documentation — cited, audited for overclaims, never fabricated.",
      },
      { property: "og:title", content: "TrustDeck — Security Questionnaire Response Team" },
      {
        property: "og:description",
        content:
          "Five-agent AI team that answers vendor security questionnaires from your actual documentation — cited, audited for overclaims, never fabricated.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TrustDeck — Security Questionnaire Response Team" },
      {
        name: "twitter:description",
        content:
          "Five-agent AI team that answers vendor security questionnaires from your actual documentation — cited, audited for overclaims, never fabricated.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        type: "image/png",
        href: OG_IMAGE,
      },
    ],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}