import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";

const DrawerSheet = ({ content, drawerProps }) => {
  return (
    <Drawer anchor="right" {...drawerProps}>
      <div
        role="presentation"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"100%"}
          p={1}
        >
          {content}
        </Box>
      </div>
    </Drawer>
  );
};

export default DrawerSheet;
