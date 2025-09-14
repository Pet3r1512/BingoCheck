import {
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  FormLabel,
  Input,
  TextField,
  DialogContent,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    // onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle>Add New Supplier</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "16px",
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          label="Supplier Name"
          variant="standard"
          // onChange={(e) => {
          //   setStaffName(e.target.value.toString());
          // }}
          required
        />
        <TextField
          fullWidth
          label="Number of Box"
          type="number"
          variant="standard"
          required
        />
        <Button sx={{ marginTop: "8px" }} variant="contained">
          Create
        </Button>
      </DialogContent>
    </Dialog>
  );
}
