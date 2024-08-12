import { Box } from "@mui/material";
import KanbanBoardColumn from "./KanbanBoardColumn";
import DEFAULT_FUNNELS from "@/_mock/funnels.json";

const KanbanBoard = () => {
  return (
    <Box display={"flex"} gap={2} overflowx={"auto"} p={1}>
      {DEFAULT_FUNNELS.map((funnel) => (
        <KanbanBoardColumn key={funnel.funnelId} id={funnel.funnelId} title={funnel.funnelTitle} />
      ))}
    </Box>
  );
};

export default KanbanBoard;
