import styled from "styled-components";

export const AddTaskForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -3.2rem 3.2rem 0 3.2rem;

  input {
    width: 100%;
    height: 5.6rem;
    min-width: 8rem;
    max-width: 67.2rem;
    padding: 1.6rem;
    border-radius: 0.8rem;
    border: none;

    background-color: ${({ theme }) => theme.colors["gray-500"]};
    color: ${({ theme }) => theme.colors["gray-100"]};
    font-size: 1.6rem;
  }

  button {
    width: 6.4rem;
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8rem;
    padding: 0.8rem;
    border-radius: 0.8rem;
    border: none;

    background-color: ${({ theme }) => theme.colors["secondary-base"]};
    color: ${({ theme }) => theme.colors["gray-100"]};
    font-weight: bold;

    transition: background-color 0.1s ease-in-out;

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["gray-100"]};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors["secondary-dark"]};
      cursor: pointer;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    margin: -3.2rem 16rem 0 16rem;
  }
`;
