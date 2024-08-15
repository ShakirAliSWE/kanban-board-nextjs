import { Avatar, Box, Chip, Typography } from "@mui/material";
import BorderContainer from "@/components/Form/BorderContainer";
import LeadActivityTask from "./LeadActivityTask";

const LeadActivityTasks = () => {
  return (
    <BorderContainer display={"flex"} flexDirection={"column"} px={1}>
      <Box display={"flex"} alignItems={"center"} mb={2}>
        <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"} gap={1}>
          <Typography fontWeight={600}>Activity Name</Typography>
          <Typography variant="caption">22 Aug 2024, 13:00 to 14:00 (1 hour)</Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          flexGrow={1}
          gap={1}
        >
          <Chip label={"Pending"} size={"small"} color="info" variant="outlined" />
          <Avatar sx={{ width: 24, height: 24, fontSize: "0.7rem" }}>SA</Avatar>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        {[...Array(10)].map((_, i) => (
          <LeadActivityTask key={i} id={i} />
        ))}
      </Box>
    </BorderContainer>
  );
};

export default LeadActivityTasks;
