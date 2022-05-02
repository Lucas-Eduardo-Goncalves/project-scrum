import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  ImageArea,
  Content,
  AnimationContainer,
} from "./styles";

export function SignIn() {
  const { SignInWithGoogle, user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname === "/" && user) navigate("/dashboard");
  }, []);

  return (
    <Container>
      <ImageArea />

      <Content>
        <AnimationContainer>
          <h1>Bem vindo!</h1>
          <p>Faça login para aproveitar nossas salas!</p>

          <Button 
            type="button"
            text="Login com o Google" 
            size="large" 
            icon={FaGoogle} 
            onClick={SignInWithGoogle}
            disabled={!!user}
          />
        </AnimationContainer>
      </Content>
    </Container>
  );
}
