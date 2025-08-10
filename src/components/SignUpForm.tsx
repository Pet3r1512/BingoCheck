import { Button, Stack, TextField } from "@mui/material";
import useGetTodayDate from "~/hooks/useGetTodayDate";

export default function SignUpForm() {
  const currentDate = useGetTodayDate();
  return (
    <Stack
      direction={"column"}
      paddingInline={4}
      marginBlock="auto"
      gap={2}
      alignItems="center"
      justifyContent="center"
      minHeight="75dvh"
    >
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
        required
      />
      <Button type="submit" fullWidth sx={{ marginTop: 2 }} variant="contained">
        Next Step
      </Button>
    </Stack>
  );
}
