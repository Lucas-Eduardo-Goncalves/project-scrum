import { styled } from "@stitches/react";

export const Container = styled("button", {
  height: '2.5rem',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  
  border: '1px solid var(--primary)',
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  
  display: 'flex',
  alignItems: 'center',

  div: {
    background: 'var(--primary)',
    display: 'flex',
    padding: '0 1rem',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    width: '200px',
    fontSize: '14px',
    fontWeight: '500',
  }
});
