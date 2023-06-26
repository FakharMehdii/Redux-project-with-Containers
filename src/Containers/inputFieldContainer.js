import { InputField } from "../Components/InputField";
import { addTodo } from "../store/actions";

const InputFieldContainer = () => {

    const mapStateToProps = () => { return {}; }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            addTodo: (value) => dispatch(addTodo(value))
        };
    }
    
    return <InputField {...mapDispatchToProps} {...mapStateToProps} />
}

export default InputFieldContainer;