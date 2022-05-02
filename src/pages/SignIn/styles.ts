import { keyframes, styled } from "@stitches/react";
import SignInImg from "../../assets/login.svg";

const appearFromLeft = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-50px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0px)",
  }
})

export const Container = styled("div", {
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "stretch",
});

export const ImageArea = styled("div", {
  flex: 1,
  background: `url(${SignInImg}) no-repeat center`,
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.25rem",
  width: "100%",
  maxWidth: "45rem",

  background:  "linear-gradient(to right, var(--background), var(--shape))",
});

export const AnimationContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  animation: `${appearFromLeft} 1s`,
  
  width: "100%",
  maxWidth: "28rem",

  "p": {
    marginBottom: "4rem",
  }
});