"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import "./styles.css";

export interface Accordionprops {
  pergunta: string;
  resposta: string;
  key: string;
}

export default function ControlledAccordions({
  key,
  pergunta,
  resposta,
}: Accordionprops) {
  const [expanded, setExpanded] = React.useState<string | boolean>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="text-center w-4/5 flex flex-col items-center justify-center mx-auto border-b-[1px] border-b-lines rounded">
      <Accordion
        style={{
          width: "100%",
          backgroundColor: "transparent",
          color: "#FFFFFF",
        }}
        expanded={expanded === `panel${key}`}
        onChange={handleChange(`panel${key}`)}
      >
        <AccordionSummary
          className="pergunta"
          aria-controls={`panel${key}bh-content`}
          id={`panel${key}bh-header`}
        >
          <Typography sx={{ color: "#FFF" }}>{pergunta}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{resposta}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
