import React, { useEffect, useRef } from "react";
import "../Styles/FlowDiagram.css";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(MotionPathPlugin);

function FlowDiagram({ activeStep, onStepChange }) {
  const rectRefs = useRef([]);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const paths = {
      2: ".path-to-1", // Step 1 to Step 2
      3: ".path-to-3", // Step 2 to Step 3
      4: ".path-to-4", // Step 3 to Step 4
    };

    rectRefs.current.forEach((rect, index) => {
      if (index + 1 === activeStep && paths[activeStep]) {
        gsap.to(rect, {
          motionPath: {
            path: paths[activeStep],
            align: paths[activeStep],
            alignOrigin: [0.5, 0.5],
          },
          duration: 3,
          ease: "power2.inOut",
        });
      }
    });
  }, [activeStep]);

  return (
    <div className="flow-diagram" data-aos="zoom-in">
      <button
        className={`step-button ${activeStep === 1 ? "active" : ""}`}
        onClick={() => onStepChange(1)}
        style={{ marginLeft: "-10px", marginBottom: "-5px" }}
      >
        Step 1
      </button>
      <svg viewBox="0 0 1000 200" className="flow-svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#FF057C", stopOpacity: 1 }}
            />
            <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M50,5 C50,150 50,150 530,200" // Curve from Step 1 to Step 2
          stroke="url(#gradient1)"
          fill="none"
          strokeWidth="3"
          className="path-to-1"
        />
        <rect
          ref={(el) => (rectRefs.current[1] = el)} // Step 1 rectangle
          width="20"
          height="20"
          fill="red"
          x="50"
          y="5"
          rx="2"
          className={`flow-highlight ${
            activeStep === 1 ? "visible" : "hidden"
          }`}
        />
      </svg>

      <button
        style={{ marginLeft: "246px", marginTop: "-10px" }}
        className={`step-button ${activeStep === 2 ? "active" : ""}`}
        onClick={() => onStepChange(2)}
      >
        Step 2
      </button>
      <svg viewBox="0 0 1000 200" className="flow-svg">
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 0.6 }} />
            <stop
              offset="100%"
              style={{ stopColor: "voilet", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M550,5 C150,100 250,160 350,400" // Curve from Step 2 to Step 3
          stroke="url(#gradient2)"
          fill="none"
          strokeWidth="3"
          className="path-to-3"
        />
        <rect
          ref={(el) => (rectRefs.current[2] = el)}
          width="20"
          height="20"
          fill="red"
          x="530"
          y="200"
          rx="2"
          className={`flow-highlight ${
            activeStep === 2 ? "visible" : "hidden"
          }`}
        />
      </svg>

      <button
        style={{ marginLeft: "112px", marginTop: "-1px" }}
        className={`step-button ${activeStep === 3 ? "active" : ""}`}
        onClick={() => onStepChange(3)}
      >
        Step 3
      </button>
      <svg viewBox="0 0 1000 200" className="flow-svg">
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#8D0B93", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "voilet", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M350,5 C810,80 80,160 30,300" // Curve from Step 3 to Step 4
          stroke="url(#gradient3)"
          fill="none"
          strokeWidth="3"
          className="path-to-4"
        />
        <rect
          ref={(el) => (rectRefs.current[3] = el)}
          width="20"
          height="20"
          fill="red"
          x="350"
          y="400"
          rx="2"
          className={`flow-highlight ${
            activeStep === 3 ? "visible" : "hidden"
          }`}
        />
      </svg>

      <button
        style={{ marginLeft: "52px" }}
        className={`step-button ${activeStep === 4 ? "active" : ""}`}
        onClick={() => onStepChange(4)}
      >
        Step 4
      </button>
    </div>
  );
}

export default FlowDiagram;
