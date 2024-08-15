import { Box, Typography } from "@mui/material";
import BorderContainer from "@/components/Form/BorderContainer";
import LeadActivityTaskQuestions from "./LeadActivityTaskQuestions";
import DEFAULT_LEAD_TASK_QUESTIONS from "@/_mock/leads_task_questions.json";

const LeadActivityTaskPerform = () => {
  return (
    <BorderContainer display={"flex"} flexDirection={"column"} px={1}>
      <Box display={"flex"} mb={2}>
        <Typography fontWeight={600}>Follow up Activitiy</Typography>
        <Box display={"flex"} flexDirection={"column"} alignItems={"end"} flexGrow={1} gap={1}>
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="caption">Number of questions </Typography>
            <Typography variant="caption"> — </Typography>
            <Typography variant="caption" fontWeight={600}>
              2
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="caption">Task Beign Performed By </Typography>
            <Typography variant="caption"> — </Typography>
            <Typography variant="caption" fontWeight={600}>
              Shakir Ali
            </Typography>
          </Box>
        </Box>
      </Box>
      {DEFAULT_LEAD_TASK_QUESTIONS.map((question, i) => (
        <LeadActivityTaskQuestions
          key={i}
          number={i + 1}
          type={question.type}
          title={question.questionTitle}
          {...question}
        />
      ))}
    </BorderContainer>
  );
};

export default LeadActivityTaskPerform;
