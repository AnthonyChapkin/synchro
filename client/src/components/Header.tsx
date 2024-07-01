import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  headerNum: 1 | 2 | 3 | 4 | 5 | 6;
}

function Header({ children, headerNum }: Props) {
  const HeaderTag = `h${headerNum}` as keyof JSX.IntrinsicElements;

  return <HeaderTag>{children}</HeaderTag>;
}

export default Header;
