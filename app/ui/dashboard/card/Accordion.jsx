"use client";
import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
      <style jsx>{`
        .accordion {
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          background-color: #f1f1f1;
        }
        .accordion-content {
          padding: 10px;
          border-top: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default Accordion;
