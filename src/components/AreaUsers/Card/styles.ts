import { styled } from "@stitches/react";

export const Container = styled("div", {
  position: "relative",

  img: {
    position: "absolute",
    top: "-0.75rem",
    left: "-0.75rem",
    width: "2rem",
    height: "2rem",
    borderRadius: "1rem",
  },
})

export const Content = styled("div", {
  background: "var(--primary)",
  color: "#FFFFFF",

  height: "5rem",
  width: "4rem",
  borderRadius: "0.5rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid transparent",

  variants: {
    cardState: {
      notSelected: {
        background: "#ccc"
      },

      cardView: {
        background: "#ffffff",
        borderColor: "#8367c7",
        color: "#8367c7",
        fontWeight: "bold",
      },

      cardSelected: {
        background: "#8367c7"
      },
    }
  }
})

