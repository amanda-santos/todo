import styled from "styled-components";

export const CustomCheckbox = styled.button`
  min-width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.colors["primary-dark"]};
  box-shadow: 0px 0px 0px 0px ${({ theme }) => theme.colors["primary-dark"]}
    inset;
  transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scale(0);
    background-size: 80%;
    background-image: url("src/assets/check-icon.svg");
    background-repeat: no-repeat;
    background-position: center;
    transition-delay: 0.2s !important;
    transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
  }
`;
