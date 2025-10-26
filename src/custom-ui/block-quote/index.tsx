import "./styles.css";

export const BlockQuote = ({ children }: { children: React.ReactNode }) => {
  return <aside className="blockquote-root">{children}</aside>;
};
