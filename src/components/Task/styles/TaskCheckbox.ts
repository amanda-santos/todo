import styled from "styled-components";

export const TaskCheckbox = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;

  width: 100%;
  max-width: 92%;
  box-sizing: border-box;

  label {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
