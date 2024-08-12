"use client";
import { useEffect, useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Draggable } from "react-beautiful-dnd";

import KanbanBoardCard from "./KanbanBoardCard";
import { numberFormat } from "@/utils/number-format.utils";

const KanbanBoardColumn = ({ id, title, leads = [] }) => {
  const [valuation, setValuation] = useState(0);

  useEffect(() => {
    const totalValuation = leads.reduce((acc, lead) => acc + parseInt(lead.valuation), 0);
    setValuation(totalValuation || 0);
  }, [id]);

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
        {leads.map((lead, index) => (
          <Draggable key={lead.leadId} draggableId={String(lead.leadId)} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <KanbanBoardCard
                  title={lead.leadTitle}
                  ownerName={lead.ownerName}
                  valuation={numberFormat(lead.valuation)}
                  closingDate={lead.closingDate}
                />
              </div>
            )}
          </Draggable>
        ))}
      </Box>
    </Box>
  );
};

export default KanbanBoardColumn;
