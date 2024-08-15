"use client";
import dynamic from "next/dynamic";

import { Grid, Typography } from "@mui/material";
import BorderContainer from "../Form/BorderContainer";
const FormQuestions = dynamic(() => import("@/components/Form/FormQuestions"));

const LeadActivityTaskQuestions = ({ number, type, title, ...props }) => {
  return (
    <BorderContainer display={"flex"} flexDirection={"column"}>
      <Grid container px={2}>
        <Grid item xs={12}>
          <Typography fontWeight={600} variant="caption">
            Question {number}.
          </Typography>
        </Grid>
        <Grid item xs={12} display={"flex"} gap={1 / 2}>
          <Typography>{title}?</Typography>
          {props.required ? <Typography color={"error"}>*</Typography> : null}
        </Grid>
        <Grid item xs={12} md={6} pt={1} pb={1}>
          <FormQuestions type={type} options={props.options || []} {...props} />
        </Grid>
      </Grid>
    </BorderContainer>
  );
};

export default LeadActivityTaskQuestions;
