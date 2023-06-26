import { ToDoList } from "../Components/ToDoList";

const ToDoListContainer = () => {

    const mapStateToProps = (state) => {
        return { tasks: state.list.tasks };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {};
    };

    return <ToDoList {...mapStateToProps} {...mapDispatchToProps} />
}

export default ToDoListContainer;