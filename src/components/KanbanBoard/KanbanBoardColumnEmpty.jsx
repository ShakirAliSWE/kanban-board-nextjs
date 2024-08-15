import { Box, Button, Typography } from "@mui/material";
import { IoMdAdd } from "react-icons/io";

const KanbanBoardColumnEmpty = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"80vh"}
      minWidth={300}
      maxWidth={300}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        p={1}
        px={3}
        onClick={() => {
          alert("You have selected add new funnel");
        }}
        sx={{ borderStyle: "dashed", cursor: "pointer" }}
      >
        <Typography fontWeight={500}>Add Funnel Stage</Typography>
        <IoMdAdd size={18} />
      </Box>
    </Box>
  );
};

export default KanbanBoardColumnEmpty;
