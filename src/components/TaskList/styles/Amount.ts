import styled from "styled-components";

export const Amount = styled.span`
  margin-left: 0.4rem;
  padding: 0.6rem;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors["gray-200"]};
  background-color: ${({ theme }) => theme.colors["gray-400"]};
`;
