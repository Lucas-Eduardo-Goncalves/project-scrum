import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { AreaUsers } from "../../components/AreaUsers";
import { RoomCode } from "../../components/RoomCode";
import { db } from "../../services/firebase";

import { 
  Container,
  Header,
  Content,
  Main,
  RigthArea,
} from "./styles";

interface IUsersInTheRoomProps {
  avatar: string;
  email: string;
  id: string;
  name: string;
  card: {
    selected: boolean;
    card: number;
  }
}

interface IRoomInfoProps {
  createdAt: string;
  name: string;
  viewCard: boolean;
}

interface IFetchProps {
  usersInsideTheRoom: IUsersInTheRoomProps[]; 
  roomInfo: IRoomInfoProps;
}

export function RoomAdmin() {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState<IFetchProps>();

  if(id) {
    onSnapshot(doc(db, "rooms", id), (doc) => {
      const clientFetch = doc.data() as IFetchProps;
      setFetchData(clientFetch);
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
          {fetchData && (
            <AreaUsers 
              roomInfo={fetchData.roomInfo} 
              usersInTheRoom={fetchData.usersInsideTheRoom}
            />
          )}
        </Main>
      </Content>
    </Container>
  )
}
