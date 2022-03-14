import { Step, StepLabel, Stepper } from "@mui/material";
// import styled from "../styles/layout.module.css";
import React from "react";
import useStyles from "../utils/style";

const CheckoutWizard = ({ activeStep = 0 }) => {
  const styled = useStyles();
  return (
    <div style={{marginTop: '30px'}}>

    <Stepper className={styled.transparentBackground} activeStep={activeStep} alternativeLabel>
      {["Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
        )}
    </Stepper>
    </div>
  );
};

export default CheckoutWizard;
