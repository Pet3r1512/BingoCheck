import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bingo")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/bingo"!</div>;
}
