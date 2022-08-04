import styled from "styled-components";

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.colors["gray-400"]};
  padding: 6.4rem;

  width: 100%;
  max-width: 73.6rem;

  p {
    text-align: center;
    font-size: 1.6rem;
    line-height: 140%;
    color: ${({ theme }) => theme.colors["gray-300"]};
  }
`;
