import React from "react";
import Card from "react-bootstrap/Card";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import "../Styles/StepCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RestartButton from "./RestartButton";

function StepCard({ activeStep, onStepChange, restart }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const stepContent = {
    1: "This is the content for Step 1.",
    2: "This is the content for Step 2.",
    3: "This is the content for Step 3.",
    4: "This is the content for Step 4.",
  };

  return (
    <Card
      style={{ width: "18rem", color: "white" }}
      className="cardstyle"
      data-aos="fade-up"
    >
      <Card.Body>
        <Card.Title data-aos="fade-up">Step {activeStep} </Card.Title>
        <Card.Text data-aos="fade-up">{stepContent[activeStep]}</Card.Text>
        <br />
        <br />
        <div className="d-flex justify-content-between gap-1">
          <div className="mt-5">
            <RestartButton restart={restart} />
          </div>
          <div>
            <FiArrowLeftCircle
              size={20}
              onClick={() =>
                activeStep > 1 ? onStepChange(activeStep - 1) : ""
              }
              data-aos="fade-up"
            />
            <FiArrowRightCircle
              size={20}
              data-aos="fade-up"
              onClick={() =>
                activeStep < 4 ? onStepChange(activeStep + 1) : ""
              }
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StepCard;
