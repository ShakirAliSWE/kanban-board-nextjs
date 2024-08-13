"use client";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanBoardColumn from "./KanbanBoardColumn";
import DEFAULT_FUNNEL_LEADS from "@/_mock/funnel_leads.json";

const KanbanBoard = () => {
  const [funnelLeads, setFunnelLeads] = useState(DEFAULT_FUNNEL_LEADS);

  const onDragStart = (start) => {
    // console.log("~ Dragging started", start);
    // You can implement additional logic here if needed
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const destinationFunnelId = +destination.droppableId;
    const sourceFunnelId = +source.droppableId;
    // const leadId = +draggableId;

    const newFunnelLeads = [...funnelLeads];

    const sourceIndex = newFunnelLeads.findIndex(
      (funnelLead) => funnelLead.funnelId === sourceFunnelId
    );
    const destinationIndex = newFunnelLeads.findIndex(
      (funnelLead) => funnelLead.funnelId === destinationFunnelId
    );

    // Get the lead being moved
    const sourceLeads = newFunnelLeads[sourceIndex].leads;
    const [movedLead] = sourceLeads.splice(source.index, 1);

    // Add the lead to the destination funnel's leads array at the correct position
    newFunnelLeads[destinationIndex].leads.splice(destination.index, 0, movedLead);

    // Update the state with the new funnel leads
    setFunnelLeads(newFunnelLeads);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Box display={"flex"} gap={2} overflowX={"auto"} p={1}>
        {funnelLeads.map((funnel) => (
          <Droppable key={funnel.funnelId} droppableId={String(funnel.funnelId)}>
            {(provided) => (
              <Box ref={provided.innerRef} {...provided.droppableProps}>
                <KanbanBoardColumn
                  id={funnel.funnelId}
                  title={funnel.funnelTitle}
                  leads={funnel.leads || []}
                />
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        ))}
      </Box>
    </DragDropContext>
  );
};

export default KanbanBoard;
