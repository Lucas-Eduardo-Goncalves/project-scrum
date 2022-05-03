import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  img: {
    width: "2rem",
    height: "2rem",
    borderRadius: "2rem",
    marginBottom: "0.5rem"
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

  variants: {
    isSelected: {
      true: {
        background: "var(--primary)",
        color: "#FFFFFF",
      },

      false: {
        background: "#ccc"
      }
    }
  }
})

