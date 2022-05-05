import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
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

    div: {
      background: "#386641",
      border: "4px solid #000000",
      height: "100%",
      width: "100%",
      borderRadius: "6rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      button: {
        height: "3rem",
        width: "9rem",
        borderRadius: "0.5rem",
        border: "none",
        backgroundColor: "#8367c7",
        color: "#FFFFFF",
        fontWeight: "bold",
        transition: "filter 0.2s",

        "&:hover": {
          filter: "brightness(0.9)",
        }
      }
    }
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