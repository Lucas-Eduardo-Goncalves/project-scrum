import { styled } from "@stitches/react";

export const Container = styled("div", {
  flex: '1',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(to right, var(--background), var(--shape))',
});

export const Content = styled("form", {
  display: 'flex',
  flexDirection: 'column',
  width: "21.5rem",
  gap: '0.5rem',

  label: {
    fontSize: '1.3rem',
    fontWeight: '500',
    color: 'var(--secondary)',
  },

  input: {
    border: 'none',
    borderRadius: '0.40rem',
    padding: '0.5rem',
  }
});