import styled from "styled-components";

export const DeleteTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 0.4rem;

  cursor: pointer;
  background: none;
  color: inherit;
  border: none;
  transition: all 0.125s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors["gray-400"]};
    color: ${({ theme }) => theme.colors["danger-base"]};
  }
`;
