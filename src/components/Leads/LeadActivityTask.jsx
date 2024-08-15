import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import BorderContainer from "../Form/BorderContainer";
import DEFAULT_ICON_TASK from "@/assets/icon-task.png";
import Link from "next/link";

const LeadActivityTask = ({ id }) => {
  return (
    <BorderContainer display={"flex"} gap={1} alignItems={"center"}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8} display={"flex"} alignItems={"center"} gap={1}>
          <Image src={DEFAULT_ICON_TASK} width={24} height={24} />
          <Typography fontWeight={500}>Contact Details</Typography>
        </Grid>
        <Grid item xs={12} md={4} display={"flex"} justifyContent={"flex-end"}>
          <Button
            variant="outlined"
            size="small"
            endIcon={<IoIosArrowForward />}
            LinkComponent={Link}
            href={`/leads/task/${id}`}
          >
            Perform Task
          </Button>
        </Grid>
      </Grid>
    </BorderContainer>
  );
};

export default LeadActivityTask;
