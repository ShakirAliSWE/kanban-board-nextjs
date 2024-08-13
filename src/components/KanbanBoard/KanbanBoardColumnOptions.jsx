import React, { useState } from "react";

import { FaFolderOpen, FaPencilAlt, FaTrash } from "react-icons/fa";

import ContextMenu from "../ContextMenu/ContextMenu";
import ContextMenuItem from "../ContextMenu/ContextMenuItem";
import DrawerSheet from "../DrawerSheet/DrawerSheet";
import KanbanBoardColumnActions from "./KanbanBoardColumnActions";

const KanbanBoardColumnOptions = ({ id, anchorEl, onClose }) => {
  const [actionDetails, setActionDetails] = useState({
    id: null,
    action: null,
    drawerState: false,
  });

  const handlerOnClick = (action, funnelId) => {
    setActionDetails({ id: funnelId, action: action, drawerState: true });
    onClose();
  };

  const handlerCloseDrawer = () => {
    setActionDetails((prevState) => ({ ...prevState, drawerState: false }));
  };

  const DEFAULT_OPTIONS = [
    {
      title: "Edit Funnel",
      action: "edit",
      icon: <FaPencilAlt size={14} />,
    },
    {
      title: "Delete Funnel",
      action: "delete",
      icon: <FaTrash size={14} />,
    },
  ];

  return (
    <>
      <ContextMenu anchorEl={anchorEl} onClose={onClose}>
        {DEFAULT_OPTIONS.map((option) => (
          <ContextMenuItem
            key={option.title}
            title={option.title}
            icon={option.icon}
            onClick={() => handlerOnClick(option.action, id)}
          />
        ))}
      </ContextMenu>
      {actionDetails.id && (
        <DrawerSheet
          content={
            <KanbanBoardColumnActions action={actionDetails.action} onClose={handlerCloseDrawer} />
          }
          drawerProps={{
            open: actionDetails.drawerState,
            onClose: handlerCloseDrawer,
            PaperProps: { sx: { width: 300 } },
          }}
        />
      )}
    </>
  );
};

export default KanbanBoardColumnOptions;
