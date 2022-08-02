import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 6.4rem;
  font-size: 1.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    margin: 6.4rem 4rem;
  }
`;
