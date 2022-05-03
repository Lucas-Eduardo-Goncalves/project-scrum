import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "100%",
  width: "100%",
});

export const Content = styled("div", {
  display: "grid",
  
  gridTemplateColumns: "8rem 1fr 8rem",
  gridTemplateRows: "auto 1fr auto",
  
  height: "100%",
  maxHeight: "30rem",
  width: "100%",
  maxWidth: "45rem",
  padding: "1rem",

  gridTemplateAreas: `
    "left top right"
    "left table right"
    "left bottom right"
  `,

  ".tableTop": {
    gridArea: "top",
    display: "flex",
    
    height: "8rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "5rem",
  },

  ".tableLeft": {
    gridArea: "left",
    display: "flex",
    flexDirection: "column",
    width: "8rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "5rem",
  },

  ".tableTable": {
    gridArea: "table",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ".tableRight": {
    gridArea: "right",
    width: "8rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5rem",
  },

  ".tableBottom": {
    gridArea: "bottom",
    height: "8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5rem",
  },
})

export const Card = styled("div", {
  background: "var(--primary)",
  color: "#FFFFFF",

  padding: "2rem 1.5rem",
  borderRadius: "0.5rem"
})