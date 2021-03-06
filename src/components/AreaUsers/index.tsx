import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { HandleResetRoom } from "../../utils/HandleResetRoom";
import { HandleViewCard } from "../../utils/HandleViewCard";
import { SequencyCards } from "../SequencyCards";
import { Card } from "./Card";
import {
  Container,
  Content,
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

interface IAreaUsersProps {
  usersInTheRoom: IUsersInTheRoomProps[]; 
  roomInfo: IRoomInfoProps;
}

export function AreaUsers({ usersInTheRoom, roomInfo: { viewCard } }: IAreaUsersProps) {
  const { user } = useAuth();

  const { id } = useParams();
  const location = useLocation();

  async function handleViewCard() {
    if(!id) return;
    if(!user) return;

    await HandleViewCard({ 
      docId: id, 
      userId: user.uid, 
      viewCard: true 
    })
  }

  async function handleResetRoom() {
    if(!id) return;
    if(!user) return;

    await HandleResetRoom({ docId: id })
  }

  return (
    <Container>
      <Content>
        <div />
        <div className="tableTop">
          {usersInTheRoom[0] && <Card data={usersInTheRoom[0]} cardView={viewCard} />}
          {usersInTheRoom[2] && <Card data={usersInTheRoom[2]} cardView={viewCard}/>}
          {usersInTheRoom[4] && <Card data={usersInTheRoom[4]} cardView={viewCard}/>}
        </div>
        <div />
        <div className="tableLeft">
          {usersInTheRoom[6] && <Card data={usersInTheRoom[6]} cardView={viewCard}/>}
          {usersInTheRoom[8] && <Card data={usersInTheRoom[8]} cardView={viewCard}/>}
        </div>
        <div className="tableTable">
          <div>
            {location.pathname.includes("adminroom") && (
              <>
                {viewCard && (
                  <button onClick={handleResetRoom}>
                    Novo jogo
                  </button>
                )}
              
                {!viewCard && (
                  <button onClick={handleViewCard}>
                    Revelar cartas
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        <div className="tableRight">
          {usersInTheRoom[7] && <Card data={usersInTheRoom[7]} cardView={viewCard}/>}
          {usersInTheRoom[9] && <Card data={usersInTheRoom[9]} cardView={viewCard}/>}
        </div>
        <div />
        <div className="tableBottom">
          {usersInTheRoom[1] && <Card data={usersInTheRoom[1]} cardView={viewCard}/>}
          {usersInTheRoom[3] && <Card data={usersInTheRoom[3]} cardView={viewCard}/>}
          {usersInTheRoom[5] && <Card data={usersInTheRoom[5]} cardView={viewCard}/>}
        </div>
        <div />
      </Content>

      <SequencyCards />
    </Container>
  )
}