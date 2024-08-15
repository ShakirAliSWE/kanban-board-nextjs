"use client";
import { Box, Typography, styled } from "@mui/material";

const steps = [
  { label: "New", active: true },
  { label: "Discovery", active: true },
  { label: "Proposal", active: false },
  { label: "Negotiation", active: false },
];

const WizardStep = styled(Box)(({ theme, active }) => ({
  position: "relative",
  backgroundColor: active ? "#8e2a5b" : "#f6f6f6",
  color: active ? "#fff" : "#333",
  padding: "10px 30px",
  textAlign: "center",
  flex: 1,
  fontWeight: "bold",

  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    top: -2,
    right: "-15px",
    width: 0,
    height: 0,
    borderTop: "25px solid transparent",
    borderBottom: "25px solid transparent",
    borderLeft: active ? "15px solid #8e2a5b" : "15px solid #f6f6f6",
    zIndex: 1,
  },
  // "&:first-of-type": {
  //   borderTopLeftRadius: "10px",
  //   borderBottomLeftRadius: "10px",
  // },
  // "&:last-of-type": {
  //   borderTopRightRadius: "10px",
  //   borderBottomRightRadius: "10px",
  // },
}));

const WizardLead = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        gap: 3,
      }}
    >
      {steps.map((step, index) => (
        <WizardStep key={index} active={step.active ? 1 : 0}>
          <Typography variant="body1">{step.label}</Typography>
        </WizardStep>
      ))}
    </Box>
  );
};

export default WizardLead;
