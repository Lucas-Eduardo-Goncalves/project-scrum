import { Container } from "./styles";

interface UserProps {
  email: string;
  name: string;
  avatar: string;
  id: string;
  card: {
    selected: boolean;
    card: number;
  }
}

interface IUserCardProps {
  user: UserProps;
}

export function UserCard({ user }: IUserCardProps) {
  return (
    <Container key={user.email} isSelected={user.card.selected ? "true" : "false"}>
      <img src={user.avatar} alt={user.name} />
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </Container>
  );
}
