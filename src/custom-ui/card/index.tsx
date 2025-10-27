interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="card">
      <header>{icon}</header>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
