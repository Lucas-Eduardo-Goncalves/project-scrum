import { Container, Content } from "./styles";

interface IUserProps {
  avatar: string;
  email: string;
  id: string;
  name: string;
  card: {
    selected: boolean;
    card: number;
  }
}

interface ICardProps {
  data: IUserProps;
  cardView: boolean;
}

export function Card({ data, cardView }: ICardProps) {
  return (
    <Container>
      <img src={data.avatar} alt={data.name} />

      <Content isSelected={`${data.card.selected}`}>
        {cardView && data.card.card}
      </Content>
    </Container>
  )
}