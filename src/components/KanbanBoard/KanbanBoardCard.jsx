import { Box, IconButton, Paper, Typography } from "@mui/material";
import { RiPencilFill } from "react-icons/ri";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa6";

const KanbanBoardOption = ({ title, value, icon }) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      {icon}
      <Box display={"flex"} flexDirection={"column"}>
        <Typography fontSize={9}>{title}</Typography>
        <Typography variant="body2" fontWeight={500}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

const KanbanBoardCard = ({ title, ownerName, valuation = null, closingDate = null }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} bgcolor={"#FFF"} p={1} component={Paper}>
      <Box display={"flex"} flexGrow={1} justifyContent={"space-between"} alignItems={"center"}>
        <Typography fontWeight={500}>{title}</Typography>
        <IconButton size="small">
          <RiPencilFill />
        </IconButton>
      </Box>
      <Box display={"flex"} flexGrow={1} alignItems={"center"} mb={2}>
        <Typography variant="caption">Owner - </Typography>
        <Typography variant="caption" fontWeight={500}>
          {ownerName}
        </Typography>
      </Box>
      <Box display={"flex"} flexGrow={1} justifyContent={"space-between"} alignItems={"center"}>
        {valuation && (
          <KanbanBoardOption
            title="Valuation"
            value={`$${valuation}`}
            icon={<PiCurrencyDollarBold />}
          />
        )}

        {closingDate && (
          <KanbanBoardOption
            title="Expected Closing Date"
            value={closingDate}
            icon={<FaRegCalendar />}
          />
        )}
      </Box>
    </Box>
  );
};

export default KanbanBoardCard;
