"use client";
import { Box, Paper, Typography, styled } from "@mui/material";

const WizardStep = styled(Box)(({ theme, active }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flex: 1,
  backgroundColor: active ? "#8e2a5b" : "#f6f6f6",
  border: active ? "1px solid #8e2a5b" : "1px solid #DCDEE6",
  color: active ? "#fff" : "#333",
  padding: "5px 30px",
  fontWeight: "bold",
  clipPath: "polygon(95% 0, 100% 52%, 95% 100%, 0% 100%, 2% 51%, 0% 0%)",
}));

const WizardLead = ({ steps = [] }) => {
  return (
    <Box
      className="hide-scroll"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        overflowX: "auto",
      }}
    >
      {steps.map((step, index) => (
        <WizardStep key={index} active={step.active ? 1 : 0}>
          <Typography>{step.label}</Typography>
        </WizardStep>
      ))}
    </Box>
  );
};

export default WizardLead;
