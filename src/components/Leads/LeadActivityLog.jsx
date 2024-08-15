import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import BorderContainer from "../Form/BorderContainer";

const DEFAULT_STATUS = ["Pending", "Compled", "Rescheduled", "Cancelled", "Overdue"];
const DEFAULT_STATUS_COLORS = ["info", "success", "warning", "error", "warning"];

const LeadActivityLog = ({
  title,
  subtitle,
  performedTask = null,
  taskPerformedAt = null,
  status,
}) => {
  return (
    <BorderContainer>
      <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>
        <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
          <Typography variant="caption" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="caption">{subtitle}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={{ width: 24, height: 24, fontSize: "0.5rem" }}>SA</Avatar>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
        <Typography variant="caption">Task Performed</Typography>
        <Typography variant="caption"> — </Typography>
        <Typography variant="caption" fontWeight={600}>
          {performedTask}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
        <Chip
          label={DEFAULT_STATUS[status]}
          size="small"
          variant="outlined"
          color={DEFAULT_STATUS_COLORS[status]}
        />
        <Typography variant="caption">Performed on</Typography>
        <Typography variant="caption"> — </Typography>
        <Typography variant="caption" fontWeight={600}>
          {taskPerformedAt}
        </Typography>
        <Box display={"flex"} justifyContent={"flex-end"} flexGrow={1}>
          {status === 1 && (
            <Button variant="text" size="small" endIcon={<IoIosArrowForward />}>
              View Activity
            </Button>
          )}
          {status !== 1 && (
            <Button variant="outlined" size="small" endIcon={<IoIosArrowForward />}>
              Start Activity
            </Button>
          )}
        </Box>
      </Box>
    </BorderContainer>
  );
};

export default LeadActivityLog;
