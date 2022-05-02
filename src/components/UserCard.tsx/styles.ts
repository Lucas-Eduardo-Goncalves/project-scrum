import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 1rem',

  borderRadius: '0.5rem',

  img: {
    height: '3rem',
    width: '3rem',
    borderRadius: '1.5rem',
    marginRight: '1rem',
  },

  h3: {
    fontSize: '1rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: '13rem',
  },

  p: {
    fontSize: '0.8rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: '13rem',
  },

  "&:hover": {
    filter: 'brightness(0.9)',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: 'rgba(0, 255, 64, 0.5)',
      },

      false: {
        backgroundColor: '#DFDFDF',
      }
    }
  } 
})