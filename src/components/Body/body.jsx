import React from 'react';
import Step1 from '../step-1/step-1';
import Step2 from '../step-2/step-2';
import { StepFormContext } from '../../contexts/StepFormContext';

const Body = () => {

    return (
        <StepFormContext>
            <Step1 />
            <Step2 />
        </StepFormContext>
    )
}

export default Body
