import StepCard from "./Components/StepCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlowDiagram from "./Components/FlowDiagram";
import { useState } from "react";
import "./App.css";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleRestart = () => {
    setActiveStep(1);
  };
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col style={{ marginTop: "100px" }}>
            <StepCard
              activeStep={activeStep}
              onStepChange={handleStepChange}
              restart={handleRestart}
            />
          </Col>

          <Col style={{ marginTop: "20px" }}>
            <FlowDiagram
              activeStep={activeStep}
              onStepChange={handleStepChange}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
