import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { RoomCode } from "../../components/RoomCode";
import { UserCard } from "../../components/UserCard.tsx";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../services/firebase";
import { HandleAddCard } from "../../utils/HandleAddCard";

import { 
  Container,
  Header,
  Content,
  Main,
  SidebarUsers,
  RigthArea,
} from "./styles";

interface IUsersInTheRoomProps {
  avatar: string;
  email: string;
  id: string;
  name: string;
}

interface IFetchProps {
  usersInsideTheRoom: IUsersInTheRoomProps[]; 
}

export function RoomAdmin() {
  const { id } = useParams();
  const { user } = useAuth();

  const [usersInRoom, setUsersInRoom] = useState<any>();

  function handleSelectCard() {
    if(id && user) {
      HandleAddCard({ card: 1, docId: id, userId: user.uid })
    }
  }

  if(id) {
    onSnapshot(doc(db, "rooms", id), (doc) => {
      setUsersInRoom(doc.data());
    });
  }

  return (
    <Container>
      <Header>
        <h1>Project-scrum</h1>

        <RigthArea>
          {id && <RoomCode code={id} />}
          <button className="buttoncloseroom">Fechar sala</button>
        </RigthArea>
      </Header>

      <Content>
        <Main>
          <button onClick={handleSelectCard} >add card</button>
        </Main>

        <SidebarUsers>
          <h2>Usuários na sala</h2>

          {usersInRoom && usersInRoom.usersInsideTheRoom.map((user: any) => (
            <UserCard key={user.id} user={user} cardSelected={usersInRoom.cardSelected} />
          ))}
        </SidebarUsers>
      </Content>
    </Container>
  )
}
