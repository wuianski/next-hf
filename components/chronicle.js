import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import StepContent, { stepContentClasses } from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepButton from "@mui/material/StepButton";
import { styled } from "@mui/material/styles";

//import _, { map } from "underscore";
import _ from "lodash";

const Chronicle = ({ chronicle: dataset }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => b.id - a.id);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const groups = _.groupBy(dataset, "year");

  const arrByYear = Object.entries(groups).map((x) => {
    let year = x[0];
    let val = x[1];
    //console.log(val);
    return year, val;
  });

  //console.log(arrByYear.year);

  /*const myArr = Object.entries(groups).map((x) => {
    let year = x[0];
    let val = x[1];

    const contentArr = val.map((c) => {
      let myContent = c.content_tw;
      return myContent;
    });

    return year, contentArr;
  });*/

  /*const file1 = leadership_doc.map((leader) => {
    let url1 = leader.articles_of_organization.url;
    return url1;
  });
  console.log(file1);*/

  /** style stepper **/
  const StyledStepLabel = styled(StepLabel)(() => ({
    "& .MuiStepLabel-iconContainer": {
      display: "none",
    },
  }));

  const StyledStepContent = styled(StepContent)(() => ({
    paddingLeft: 0,
    paddingRight: "30px",
    /*width: "50px",
    display: "block",
    background:
      "linear-gradient(269.98deg, rgba(176, 147, 54, 0) 0.01%, rgba(176, 147, 54, 0.5) 99.99%)",*/
    /*"& .MuiCollapse-wrapperInner": {
      paddingBottom: "300px",
    },*/
  }));

  return (
    <>
      <Box ml={13} mr={6} mt={13}>
        <Box
          sx={{
            //in order to make element can scroll normally, give element a specific height.
            width: { xs: "60vw", md: "50vw" },
            overflow: "scroll",
          }}
          //in order to make element can scroll normally, give a className and use it in fullPage options
          className="scrollEle"
        >
          <Stepper nonLinear activeStep={activeStep}>
            {arrByYear.map((step, index) => (
              //console.log(step),
              <Step key={index} completed={completed[index]}>
                <>
                  <StyledStepLabel onClick={handleStep(index)}>
                    {index + 1971}
                    {/*<Box
                      sx={{
                        height: 100,
                        background:
                          "linear-gradient(180deg, #000000 0%, #A6A6A6 58.33%, #FFFFFF 100%)",
                      }}
                    ></Box>*/}
                  </StyledStepLabel>
                  <StyledStepContent>
                    <Box
                      sx={{
                        width: "30px",
                        height: "max-content",
                        //paddingBottom: "150px",
                        background:
                          "linear-gradient(269.98deg, rgba(176, 147, 54, 0) 0.01%, rgba(176, 147, 54, 0.5) 99.99%)",
                      }}
                    >
                      {step.map((chronicle) => (
                        <Box>
                          <Box
                            sx={{
                              position: "relative",
                              left: "30px",
                              width: "100px",
                            }}
                            key={chronicle.id}
                          >
                            {chronicle.content_tw}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </StyledStepContent>
                </>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </>
  );
};

export default Chronicle;
