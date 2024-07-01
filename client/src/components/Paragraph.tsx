import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Paragraph({ children }: Props) {
  return (
    <>
      <p>{children}</p>
    </>
  );
}

export default Paragraph;
