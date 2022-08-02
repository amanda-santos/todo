import styled from "styled-components";

export const TasksInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 73.6rem;

  margin-bottom: 2.4rem;
  font-weight: bold;

  div:first-child {
    color: ${({ theme }) => theme.colors["secondary-base"]};
  }

  div:nth-child(2) {
    color: ${({ theme }) => theme.colors["primary-base"]};
  }
`;
