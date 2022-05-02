import { styled } from "@stitches/react";

export const Container = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "1rem",

  fontWeight: 500,
  color: "var(--shape)",
  background: "var(--primary)",

  border: "none",
  borderRadius: "0.40rem",

  transition: "background-color 0.2s",

  "svg": {
    fontSize: "1.75rem",
    marginRight: "1rem",
  },

  "&:hover": {
    background: "var(--primary-light)",
  },
})