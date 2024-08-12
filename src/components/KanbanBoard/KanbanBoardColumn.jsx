"use client";
import { useEffect, useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

import KanbanBoardCard from "./KanbanBoardCard";
import { numberFormat } from "@/utils/number-format.utils";
import DEFAULT_LEADS from "@/_mock/leads.json";

const KanbanBoardColumn = ({ id, title }) => {
  const [leads, setLeads] = useState([]);
  const [valuation, setValuation] = useState(0);

  useEffect(() => {
    const filterLeads = DEFAULT_LEADS.filter((lead) => lead.funnelId === id);
    const totalValudation = filterLeads.reduce((acc, lead) => acc + parseInt(lead.valuation), 0);
    setLeads(filterLeads);
    setValuation(totalValudation || 0);
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"#F6F7F9"}
      minHeight={"80vh"}
      minWidth={300}
      maxWidth={300}
      p={1}
      component={Paper}
      elevation={3}
    >
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography fontWeight={500}>
            {title}/{leads.length}
          </Typography>
          <Typography variant="caption">(${numberFormat(valuation)})</Typography>
        </Box>
        <Box>
          <IconButton size="small">
            <BsThreeDotsVertical />
          </IconButton>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        {leads.map((lead) => (
          <KanbanBoardCard
            key={lead.leadId}
            title={lead.leadTitle}
            ownerName={lead.ownerName}
            valuation={numberFormat(lead.valuation)}
            closingDate={lead.closingDate}
          />
        ))}
      </Box>
    </Box>
  );
};

export default KanbanBoardColumn;
