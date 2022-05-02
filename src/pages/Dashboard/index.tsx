import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { HandleEnterRoom } from "../../utils/HandleEnterRoom";

import {
  Container,
  Content,
  EnterRoom,
  Center,
  Divider,
  CreateRoom,
} from "./styles";

export function Dashboard() {
  const [inputState, setInputState] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleEnterRoom() {
    if(inputState === "") {
      alert("Adicione um código correto");
      return;
    };

    if(!user) {
      alert("Esteja logado para fazer esta ação")
      return;
    }

    HandleEnterRoom({
      docId: inputState,
      navigate,
      user
    })
  }

  return (
    <Container>
      <Content>
        <EnterRoom>
          <label htmlFor="enterRoomInput">
            Entre em uma sala:
          </label>

          <input id="enterRoomInput" onChange={e => setInputState(e.target.value)} type="text" placeholder="Nome da sala:"/>

          <Button 
            text="Entrar" 
            type="button" 
            size="medium"
            onClick={handleEnterRoom}
          />
        </EnterRoom>

        <Center>
          <Divider /> ou <Divider />
        </Center>

        <CreateRoom>
          <label>Crie a sua própria sala:</label>

          <Button 
            text="Criar Sala" 
            type="button" 
            size="medium"
            onClick={() => navigate("/createroom")}
          />
        </CreateRoom>
      </Content>
    </Container>
  );
}
