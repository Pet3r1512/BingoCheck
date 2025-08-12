import { convexQuery } from "@convex-dev/react-query";
import { Button, Stack, TextField } from "@mui/material";
import { api } from "convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";
import useGetTodayDate from "~/hooks/useGetTodayDate";

export default function SignUpForm() {
  const [staffName, setStaffName] = useState<string>("");
  const [totalBox, setTotalBox] = useState<number>(0);
  const currentDate = useGetTodayDate();

  const deliveryMutation = useMutation(api.delivery.createDelivery);

  const handleClick = () => {
    deliveryMutation({
      date: currentDate,
      staffName: staffName,
      totalBox: totalBox,
    });
  };

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
        onChange={(e) => {
          setStaffName(e.target.value.toString());
        }}
        required
      />
      <TextField
        fullWidth
        type="number"
        id="standard-basic"
        label="Total number of boxes"
        variant="standard"
        required
        onChange={(e) => {
          setTotalBox(parseInt(e.target.value));
        }}
      />
      <Button
        onClick={handleClick}
        type="submit"
        fullWidth
        sx={{ marginTop: 2 }}
        variant="contained"
      >
        Next Step
      </Button>
    </Stack>
  );
}
