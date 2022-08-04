import { ReactElement } from "react";

import { EmptyStateContainer } from "components/EmptyState/styles";
import clipboardImg from "assets/clipboard.svg";

export const EmptyState = (): ReactElement => {
  return (
    <EmptyStateContainer>
      <img src={clipboardImg} />
      <p>
        <strong>You don't have any tasks registered yet. </strong> <br />
        Create tasks and organize your to-do items
      </p>
    </EmptyStateContainer>
  );
};
