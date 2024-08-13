import { Avatar, Box, Typography } from "@mui/material";

const BigCalenderEvent = ({ event }) => {
  const props = event._def.extendedProps;

  return (
    <Box
      display={"flex"}
      flexGrow={1}
      alignItems={"center"}
      gap={1}
      sx={{ border: 1, p: 0.5, borderRadius: 1 }}
    >
      <Avatar sx={{ width: 22, height: 22, fontSize: "0.65rem" }}>SA</Avatar>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography fontSize={"0.7rem"} fontWeight={600}>
          {event.title}
        </Typography>
        <Typography fontSize={"0.6rem"}>{props.type}</Typography>
      </Box>
    </Box>
  );
};

export default BigCalenderEvent;
