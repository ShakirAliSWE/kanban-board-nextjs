import { Box, Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoIosArrowBack, IoIosAdd } from "react-icons/io";

import WizardLead from "@/components/Wizards/WizardLead";
import BorderContainer from "@/components/Form/BorderContainer";
import LeadActivityLog from "@/components/Leads/LeadActivityLog";
import DEFAULT_ACTIVITES from "@/_mock/leads_activities.json";

const leadProgress = [
  { label: "New", active: true },
  { label: "Discovery", active: true },
  { label: "Proposal", active: false },
  { label: "Negotiation", active: false },
];

const LeadsActionPage = async ({ params }) => {
  const [action, id = 0] = params.action;

  if (!["view", "edit"].includes(action)) {
    redirect("../");
  }

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} alignItems={"center"} mb={2}>
        <Button size="small" startIcon={<IoIosArrowBack />} LinkComponent={Link} href="/">
          Back
        </Button>
      </Box>
      <BorderContainer>
        <WizardLead steps={leadProgress} />
      </BorderContainer>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <BorderContainer display={"flex"} flexDirection={"column"} px={2}>
            <Typography fontWeight={500}>Lead Information</Typography>
          </BorderContainer>
        </Grid>
        <Grid item xs={12} md={8}>
          <BorderContainer display={"flex"} flexDirection={"column"} px={2}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
              <Typography fontWeight={500}>Lead Activities</Typography>
              <Button size="small" variant="contained" endIcon={<IoIosAdd />}>
                Add Activity
              </Button>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              {DEFAULT_ACTIVITES.map((log, i) => (
                <LeadActivityLog
                  key={i}
                  id={log.activityId}
                  title={log.title}
                  subtitle={log.subtitle}
                  performedTask={log.taskPerformed}
                  taskPerformedAt={log.taskPerformedAt}
                  status={log.status}
                />
              ))}
            </Box>
          </BorderContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeadsActionPage;
