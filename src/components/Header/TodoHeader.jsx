import styled from "styled-components";

export function TodoHeader() {
  return (
    <>
      <StyledTodoHeader>List Todo</StyledTodoHeader>
    </>
  );
}

const StyledTodoHeader = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: #41b3a3; /* Change text color */
  position: relative;
  text-transform: uppercase;
  text-shadow: -15px 5px 20px #bfbcba;
  transition: all 0.25s ease-out; /* Corrected typo: 'transition' instead of 'transistion' */

  &:hover {
    text-shadow: -16px 6px 15px #e27d60;
  }
`;

export default TodoHeader;
