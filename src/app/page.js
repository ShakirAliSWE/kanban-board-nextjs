"use client";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import KanbanBoard from "@/components/KanbanBoard/KanbanBoard";
import BigCalender from "@/components/BigCalender/BigCalender";
import CustomToggleButtton from "@/components/Form/CustomToggleButtton";

import { CiCalendar } from "react-icons/ci";
import { MdOutlineViewKanban } from "react-icons/md";

const DEFAULT_OPTIONS = [
  {
    label: "Kanban",
    value: "kanban",
    icon: <MdOutlineViewKanban size={18} />,
  },
  {
    label: "Calender",
    value: "calender",
    icon: <CiCalendar size={18} />,
  },
];

const HomePage = () => {
  const [selectedToggle, setSelectedToggle] = useState(DEFAULT_OPTIONS[0].value);

  const handlerToggle = (event) => {
    setSelectedToggle(event.target.value);
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"center"} mt={1}>
        <Typography variant="h5">Kanban Board Example</Typography>
      </Box>
      <Box mb={2}>
        <CustomToggleButtton
          options={DEFAULT_OPTIONS}
          value={selectedToggle}
          onChange={handlerToggle}
        />
      </Box>
      {selectedToggle === "kanban" && <KanbanBoard />}
      {selectedToggle === "calender" && <BigCalender />}
    </Box>
  );
};

export default HomePage;
