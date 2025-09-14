import { createFileRoute } from "@tanstack/react-router";
import CustomizedAccordions from "~/components/checklist/Accordion";

export const Route = createFileRoute("/bingo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CustomizedAccordions />
    </div>
  );
}
