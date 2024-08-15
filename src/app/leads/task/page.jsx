import { Box, Button } from "@mui/material";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import LeadActivityTasks from "@/components/Leads/LeadActivityTasks";

const LeadTask = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} alignItems={"center"} mb={2}>
        <Button
          size="small"
          startIcon={<IoIosArrowBack />}
          LinkComponent={Link}
          href="/leads/edit/2"
        >
          Back
        </Button>
      </Box>
      <LeadActivityTasks />
    </Box>
  );
};

export default LeadTask;
