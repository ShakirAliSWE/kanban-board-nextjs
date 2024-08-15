import { Box, Button } from "@mui/material";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import LeadActivityTaskPerform from "@/components/Leads/LeadActivityTaskPerform";

const LeadTask = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} alignItems={"center"} mb={2}>
        <Button
          size="small"
          startIcon={<IoIosArrowBack />}
          LinkComponent={Link}
          href="/leads/task/"
        >
          Back
        </Button>
      </Box>
      <LeadActivityTaskPerform />
    </Box>
  );
};

export default LeadTask;
