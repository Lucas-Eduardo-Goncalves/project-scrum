import { styled } from "@stitches/react";

interface CardProps {
  isSelected: boolean;
}

export const Container = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  height: '100%',
});

export const Header = styled("div", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',

  borderBottom: '1px solid var(--secondary)',

  h1: {
    color: '#8367c7',
    fontSize: '1.5rem',
    fontWeight: "bold",
  },
})

export const RigthArea = styled("div", {
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
});
  
export const Content = styled("div", {
  display: 'flex',
  width: '100%',
  height: '100%',
})

export const Main = styled("main", {
  flex: '1',
  position: 'relative',
})

export const SidebarUsers = styled("section", {
  width: '20rem',
  borderLeft: '1px solid var(--secondary)',
  padding: '0.5rem',

  h2: {
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '1rem',
  },

  aside: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  }
})