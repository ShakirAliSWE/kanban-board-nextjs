import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box } from "@mui/material";
import BigCalenderEvent from "./BigCalenderEvent";

const events = [...Array(10)].map((_, i) => ({
  resourceId: i + 1,
  title: `Event ${i + 1}`,
  type: `Event Type ${i + 1}`,
  start: new Date(2024, 7, 14 + i, 1, 0),
  end: new Date(2024, 7, 14 + i, 1, 59),
}));

const events2 = [...Array(10)].map((_, i) => ({
  resourceId: i + 1,
  title: `New Event ${i + 1}`,
  type: `New Event Type ${i + 1}`,
  start: new Date(2024, 7, 14 + i, 2, 0),
  end: new Date(2024, 7, 14 + i, 2, 59),
}));

const allEvents = [...events, ...events2];

const BigCalender = () => {
  const handlerEvent = ({ event }) => {
    const { _def: props } = event;
    alert(`You have selected the event - ${props.title}`);
  };

  return (
    <Box mb={2}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={allEvents}
        eventContent={BigCalenderEvent}
        eventClick={handlerEvent}
        headerToolbar={{
          left: "dayGridMonth,dayGridWeek,dayGridDay",
          center: "title",
          right: "prev,next,today",
        }}
        buttonText={{
          month: "Month",
          week: "Week",
          day: "Day",
          today: "Today",
        }}
      />
    </Box>
  );
};

export default BigCalender;
