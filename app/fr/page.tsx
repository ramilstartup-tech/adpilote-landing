import { LandingPage } from "../LandingPage";
import { landingContent } from "../landingContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: landingContent.fr.meta.title,
  description: landingContent.fr.meta.description,
};

export default function Page() {
  return <LandingPage lang="fr" />;
}
