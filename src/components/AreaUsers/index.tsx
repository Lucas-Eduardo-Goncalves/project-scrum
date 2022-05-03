import {
  Container,
  Card,
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

interface IAreaUsersProps {
  usersInTheRoom: IUsersInTheRoomProps[]; 
}

export function AreaUsers({ usersInTheRoom }: IAreaUsersProps) {

  return (
    <Container>
      <Content>
        <div></div>
        <div className="tableTop">
          {usersInTheRoom[0] && <Card>{usersInTheRoom[0].card.card}</Card>}
          {usersInTheRoom[2] && <Card>{usersInTheRoom[2].card.card}</Card>}
          {usersInTheRoom[4] && <Card>{usersInTheRoom[4].card.card}</Card>}
        </div>
        <div></div>
        <div className="tableLeft">
          {usersInTheRoom[6] && <Card>{usersInTheRoom[6].card.card}</Card>}
          {usersInTheRoom[8] && <Card>{usersInTheRoom[8].card.card}</Card>}
        </div>
        <div className="tableTable">
          <button>Revelar cartas</button>
        </div>
        <div className="tableRight">
          {usersInTheRoom[7] && <Card>{usersInTheRoom[7].card.card}</Card>}
          {usersInTheRoom[9] && <Card>{usersInTheRoom[9].card.card}</Card>}
        </div>
        <div></div>
        <div className="tableBottom">
          {usersInTheRoom[1] && <Card>{usersInTheRoom[1].card.card}</Card>}
          {usersInTheRoom[3] && <Card>{usersInTheRoom[3].card.card}</Card>}
          {usersInTheRoom[5] && <Card>{usersInTheRoom[5].card.card}</Card>}
        </div>
        <div></div>

        {/* <button>Add card</button> */}
      </Content>
    </Container>
  )
}