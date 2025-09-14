import { Button } from "@mui/material";
import { useState } from "react";

export default function BingoCheck({ number }: { number: number }) {
  const [currVariant, setCurrVariant] = useState<
    "outlined" | "text" | "contained"
  >("outlined");
  return (
    <Button
      onClick={() => {
        setCurrVariant("contained");
      }}
      variant={currVariant}
    >
      {number}
    </Button>
  );
}
