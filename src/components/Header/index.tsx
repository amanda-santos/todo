import { ReactElement } from "react";

import { HeaderContainer } from "components/Header/styles";
import logo from "assets/logo.svg";

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  );
};
