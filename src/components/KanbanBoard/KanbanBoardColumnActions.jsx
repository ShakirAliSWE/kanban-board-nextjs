import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

const getTitle = (action) => {
  switch (action) {
    case "edit":
      return "Edit Funnel";
    case "delete":
      return "Delete Funnel";
    default:
      return "";
  }
};

const KanbanBoardColumnActions = ({ action, onClose }) => {
  return (
    <>
      <Box mb={2}>
        <Typography fontWeight={600}>
          {action === "edit" ? "Edit Funnel" : "Delete Funnel"}
        </Typography>
      </Box>

      {/* Content here */}
      <Box flexGrow={1} mb={2} px={1}>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={1}>
            <Typography variant="caption">Funnel Title</Typography>
            <TextField placeholder="Enter Funnel Title" size="small" fullWidth />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Typography variant="caption">Active</Typography>
            <Checkbox size="small" defaultChecked />
          </Box>
        </Box>
      </Box>

      {/* Action button here */}
      <Box display={"flex"} flexDirection={"row-reverse"} gap={1}>
        {action != "view" && (
          <Button variant="contained" size="small">
            Save
          </Button>
        )}
        <Button variant="outlined" size="small" onClick={onClose}>
          Close
        </Button>
      </Box>
    </>
  );
};

export default KanbanBoardColumnActions;
