import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  height: "6rem",
});

export const Card = styled("button", {
  height: "5rem",
  width: "4rem",
  borderRadius: "0.5rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid transparent",

  background: "#ffffff",
  borderColor: "#8367c7",
  color: "#8367c7",
  fontWeight: "bold",

  transition: "all 0.2s",

  "&:hover": {
    marginBottom: "0.5rem",
    filter: "brightness(0.9)"
  },

  variants: {
    selected: {
      true: {
        background: "#8367c7",
        color: "#FFFFFF",
        marginBottom: "1rem",

        "&:hover": {
          marginBottom: "1rem",
          filter: "brightness(1)"
        },
      },

      false: {
        background: "#ffffff",
        color: "#8367c7",
      } 
    },
  } 
});
