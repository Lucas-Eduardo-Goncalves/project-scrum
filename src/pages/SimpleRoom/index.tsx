import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { AreaUsers } from "../../components/AreaUsers";
import { RoomCode } from "../../components/RoomCode";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../services/firebase";
import { HandleAddCard } from "../../utils/HandleAddCard";

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

export function SimpleRoom() {
  const { id } = useParams();
  const { user } = useAuth();

  const [fetchData, setFetchData] = useState<IFetchProps>();

  function handleSelectCard() {
    if(id && user) {
      HandleAddCard({ card: 1, docId: id, userId: user.uid })
    }
  }

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
        </RigthArea>
      </Header>

      <Content>
        <Main>
          {fetchData && <AreaUsers roomInfo={fetchData.roomInfo} usersInTheRoom={fetchData.usersInsideTheRoom}/>}
        </Main>
      </Content>
    </Container>
  )
}
