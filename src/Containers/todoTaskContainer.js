import { ToDoTask } from "../Components/ToDoTask";
import { editTodo } from "../store/actions";
import { removeTodo } from "../store/actions";
const ToDoTaskContainer = ({element, index}) => {
    const mapStateToProps = (state) => {
        return {};
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            editTodo: (index, value) => {dispatch(editTodo(index, value))},
            removeTodo: (index) => {dispatch(removeTodo(index))}
        };
    };

    return <ToDoTask  {...mapStateToProps} {...mapDispatchToProps} element={element} index={index} />
}

export default ToDoTaskContainer;