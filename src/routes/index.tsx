import { createFileRoute } from "@tanstack/react-router";
import { Stack, TextField } from "@mui/material";
import z from "zod";
import useGetTodayDate from "~/hooks/useGetTodayDate";

export const Route = createFileRoute("/")({
  validateSearch: z.object({
    count: z.number().optional(),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const currentDate = useGetTodayDate();

  return (
    <Stack direction={"column"} paddingInline={4} gap={2} alignItems="center">
      <TextField
        id="standard-basic"
        label="Date"
        variant="standard"
        disabled
        fullWidth
        value={currentDate}
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="Staff Name"
        variant="standard"
      />
    </Stack>
  );
}
