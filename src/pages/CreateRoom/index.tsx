import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/useAuth";
import { HandleCreateRoom } from "../../utils/HandleCreateRoom";
import { Container, Content } from "./styles";

interface IFormProps {
  name: string;
} 

export function CreateRoom() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<IFormProps>();

  const handleSubmitForm: SubmitHandler<IFormProps> = async ( data ) => {
    if(!user) return;

    const createRoom = await HandleCreateRoom({ 
      roomName: data.name,
      user,
    });

    navigate(`/room/adminroom/${createRoom}`)
  }

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="createroomid">Criar Sala</label>

        <input 
          id="createroomid"
          type="text" 
          placeholder="Nome da sala" 
          {...register("name")}
        />
        
        <Button size="large" type="submit" text="Criar" />
      </Content>
    </Container>
  )
}