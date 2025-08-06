import { createFileRoute } from "@tanstack/react-router";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import z from "zod";
import { Counter } from "~/components/Counter";
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
    <Stack direction={"column"} gap={2} alignItems="center">
      <TextField
        id="standard-basic"
        label="Date"
        variant="standard"
        disabled
        value={currentDate}
      />
      <TextField id="standard-basic" label="Staff Name" variant="standard" />
    </Stack>
  );
}
