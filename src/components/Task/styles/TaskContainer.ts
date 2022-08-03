import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors["gray-500"]};
  width: 100%;
  max-width: 73.6rem;
  height: 7.2rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors["gray-400"]};
`;
