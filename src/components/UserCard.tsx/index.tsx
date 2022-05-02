import { useEffect, useState } from "react";
import { Container } from "./styles";

interface UserProps {
  email: string;
  name: string;
  avatar: string;
  id: string;
}

interface ICardProps {
  userId: string;
  card: number;
}

interface IUserCardProps {
  user: UserProps;
  cardSelected: ICardProps[];
}

export function UserCard({ user, cardSelected }: IUserCardProps) {
  const [userSelectedCard, setUserSelectedCard] = useState(false);

  useEffect(() => {
    const userAlready = cardSelected.find(item => item.userId === user.id);

    if(userAlready) setUserSelectedCard(true);
    else setUserSelectedCard(false);
  }, [user, cardSelected])

  return (
    <Container key={user.email} isSelected={userSelectedCard ? "true" : "false"}>
      <img src={user.avatar} alt={user.name} />
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </Container>
  );
}
