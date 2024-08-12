import { Box, Typography } from "@mui/material";
import KanbanBoard from "@/components/KanbanBoard/KanbanBoard";

const HomePage = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"center"} mb={2} mt={2}>
        <Typography variant="h5">Kanban Board Example</Typography>
      </Box>
      <KanbanBoard />
    </Box>
  );
};

export default HomePage;
