import { styled } from "@stitches/react";

export const Container = styled("div", {
  flex: 1,
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor:  "linear-gradient(to right, var(--background), var(--shape))",
});


export const Content = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "21.5rem",
});
  

export const EnterRoom = styled("section", {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  label: {
    fontWeight: '500',
    color: 'var(--secondary)',
  },

  input: {
    border: 'none',
    borderRadius: '0.40rem',
    padding: '0.5rem',
  },
})


export const Center = styled("section", {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  margin: '2rem 0',
  color: 'var(--secondary-light)',
})
  

export const Divider = styled("div", {
  width: '100%',
  height: '1px',
  backgroundColor: 'var(--secondary-light)',
})
  

export const CreateRoom = styled("section", {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  label: {
    fontWeight: '500',
    color: 'var(--secondary)',
  },
});

