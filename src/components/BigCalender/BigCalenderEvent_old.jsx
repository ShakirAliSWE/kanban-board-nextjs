import { Avatar, Box, Typography } from "@mui/material";

export const bigCalenderEventStyle = (event, start, end, isSelected) => {
  console.log(`~ bigCalenderEventStyle`, { event, start, end, isSelected });
  return {
    className: "",
    style: {
      backgroundColor: "#FFF",
      color: "#000",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0.3rem",
      //   display: "block",

      //   border: isSelected ? "1px solid #000" : "none",
    },
  };
};

const BigCalenderEvent = ({ event }) => {
  console.log(`~ BigCalenderEvent`, event);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ border: 1, p: 0.5, borderRadius: 1 }}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="caption" fontWeight={600}>
          {event.title}
        </Typography>
        <Typography variant="caption">Demo</Typography>
      </Box>
      <Avatar sx={{ width: 24, height: 24, fontSize: "0.8rem" }}>SA</Avatar>
    </Box>
  );
};

export default BigCalenderEvent;
