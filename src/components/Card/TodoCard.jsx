import { CiCircleCheck } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

import styled from "styled-components";

export function TodoCard({title,done,id,todos,setTodos}) {
  
    function handleDeleteOnClick() {
        setTodos(todos.filter(todo => {
            return todo.id !== id;
            })
        )
    }

    function handleToggleOnClick() {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
                return todo;
            }) 
        )
    }

    return(
        // Übergebe Styled Element property
        <StyledTodoContainer done={done}>
            <TodoText done={done}>{title}</TodoText>
            <CiCircleCheck onClick={handleToggleOnClick}/>
            <FaRegTrashAlt onClick={handleDeleteOnClick}/>
        </StyledTodoContainer>
    )
}



const TodoText  = styled.p`
    display: inline;
`


const StyledTodoContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props) => (props.done ? "green" : "red")}; /* Text color based on props */
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35); /* Box shadow */
    margin-bottom: 5px;
`;