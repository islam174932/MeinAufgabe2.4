import styled from "styled-components";
import { CiCirclePlus } from "react-icons/ci";
import { FaBullseye } from "react-icons/fa";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export function TodoInput({ todos, setTodos }) {
  const inputHook = useRef();

  function newTodo() {
    if (inputHook.current.value.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: inputHook.current.value,
          done: false,
        },
      ]);
      inputHook.current.value = ""; // Clear input after adding todo
    }
  }

  function handleOnKeyPress(e) {
    if (e.code === "Enter") {
      newTodo();
    }
  }

  function handleOnClick() {
    newTodo();
  }

  return (
    <StyledTodoInputContainer>
      <StyledInput
        ref={inputHook}
        onKeyDown={handleOnKeyPress}
        placeholder="Enter your task"
      />
      <StyledCiCirclePlus onClick={handleOnClick} />
    </StyledTodoInputContainer>
  );
}

const StyledTodoInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  flex: 1; /* Take remaining space */
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #41b3a3; /* Focus color */
  }
`;

const StyledCiCirclePlus = styled(CiCirclePlus)`
  font-size: 24px;
  color: #41b3a3; /* Icon color */
  cursor: pointer;

  &:hover {
    opacity: 0.8; /* Reduce opacity on hover */
  }
`;

export default TodoInput;
