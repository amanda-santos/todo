import styled, { css } from "styled-components";

type TaskCheckboxProps = {
  $isCompleted: boolean;
};

export const TaskCheckbox = styled.span<TaskCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;

  width: 100%;
  max-width: 92%;

  label {
    cursor: pointer;
    ${({ $isCompleted }) =>
      $isCompleted &&
      css`
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors["gray-300"]};
      `}
  }

  input {
    opacity: 0;
    visibility: hidden;
    position: absolute;

    &:checked {
      ~ .checkbox-element {
        border-color: ${({ theme }) => theme.colors["primary-base"]};
        box-shadow: 0px 0px 0px 15px
          ${({ theme }) => theme.colors["primary-base"]} inset;

        &::after {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
`;
