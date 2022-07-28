import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 20rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors["gray-700"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;
