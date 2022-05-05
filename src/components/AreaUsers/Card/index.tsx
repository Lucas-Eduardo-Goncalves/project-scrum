import { useState } from "react";
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
  function handleCardStatus(): "notSelected" | "cardView" | "cardSelected" {
    if(data.card.card === 0) return "notSelected";
    if(cardView) return "cardView";
    return "cardSelected";
  }

  return (
    <Container>
      {/* <img src={data.avatar} alt={data.name} /> */}

      <Content cardState={handleCardStatus()}>
        {cardView && data.card.card}
      </Content>
    </Container>
  )
}