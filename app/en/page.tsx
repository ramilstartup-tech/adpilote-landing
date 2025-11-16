import { LandingPage } from "../LandingPage";
import { landingContent } from "../landingContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: landingContent.en.meta.title,
  description: landingContent.en.meta.description,
};

export default function Page() {
  return <LandingPage lang="en" />;
}
