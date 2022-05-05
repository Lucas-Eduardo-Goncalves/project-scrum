import { useState } from "react";
import { useParams } from "react-router-dom"

import { useAuth } from "../../hooks/useAuth";
import { HandleAddCard } from "../../utils/HandleAddCard";

import { Container, Card } from "./styles";

export function SequencyCards() {
  const [cardSelected, setCardSelected] = useState(0); 
  const [disabledCards, setDisabledCards] = useState(false);
  const CardsFibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

  const { id } = useParams();
  const { user } = useAuth();


  async function handleSelectCard(number: number) {
    setCardSelected(number)

    setDisabledCards(true);
    if(id && user) await HandleAddCard({ card: number, docId: id, userId: user.uid });
    setDisabledCards(false);
  }

  return (
    <Container>
      {CardsFibonacci.map(card => (
        <Card 
          key={card}
          disabled={disabledCards}
          selected={cardSelected === card ? "true" : "false"} 
          onClick={() => handleSelectCard(card)}
        >
          {card}
        </Card>
      ))}
    </Container>
  );
}
