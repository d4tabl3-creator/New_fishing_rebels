import { createFileRoute } from "@tanstack/react-router";
import { RebelSite } from "@/components/rebel-site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <RebelSite />;
}
