import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { Box } from "@mui/material";
import BigCalenderEvent, { bigCalenderEventStyle } from "./BigCalenderEvent";

const localizer = momentLocalizer(moment);

const events = [...Array(10)].map((_, i) => ({
  title: `Event ${i + 1}`,
  start: new Date(2024, 7, 14, 1 + i, 0),
  end: new Date(2024, 7, 14, 1 + i, 59),
  //   start: new Date(2024, 7, 14 + i, 11, 0),
  //   end: new Date(2024, 7, 14 + i, 12, 0),
  //   allDay: false,
  resourceId: i + 1,
}));

console.log(`~ All Events`, events);

const BigCalender = () => {
  const handleSelectEvent = (event) => {
    alert(`You clicked on event: ${event.title}`);
    // Add your custom logic here
  };

  return (
    <Box mb={2}>
      <Calendar
        localizer={localizer}
        events={events}
        onSelectEvent={handleSelectEvent}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        style={{ height: 500 }}
        eventPropGetter={bigCalenderEventStyle}
        components={{
          event: BigCalenderEvent,
        }}
      />
    </Box>
  );
};

export default BigCalender;
