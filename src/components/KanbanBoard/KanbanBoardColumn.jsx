"use client";
import { useEffect, useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Draggable } from "@hello-pangea/dnd";

import KanbanBoardCard from "./KanbanBoardCard";
import { numberFormat } from "@/utils/number-format.utils";
import KanbanBoardColumnOptions from "./KanbanBoardColumnOptions";

const KanbanBoardColumn = ({ id, title, leads = [], onEditClick = null }) => {
  const [valuation, setValuation] = useState(0);

  ///////////////////////////////////////////////////
  //  KANBAR BOARD COLUMN MENUS START
  ///////////////////////////////////////////////////
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  ///////////////////////////////////////////////////
  //  KANBAR BOARD COLUMN MENUS END
  ///////////////////////////////////////////////////

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
          <IconButton size="small" onClick={handleMenuOpen}>
            <BsThreeDotsVertical />
          </IconButton>
          <KanbanBoardColumnOptions id={id} anchorEl={anchorEl} onClose={handleMenuClose} />
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
                  id={lead.leadId}
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
