import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Controlls = () => {
    const numberElement = useRef();

    const dispatch = useDispatch();
    const handleCounterIncrement = () => {
        dispatch(counterAction.increment());
    }
    const handleCounterDecrement = () => {
        dispatch(counterAction.decrement());
    }
    const handleAddition = () => {
        dispatch(counterAction.add({ number: numberElement.current.value }));
        numberElement.current.value = "";
    }
    const handleSubtraction = () => {
        dispatch(counterAction.subtraction({ number: numberElement.current.value }));
        numberElement.current.value = "";
    }
    const handlePrivacyToggle = () => {
        dispatch(privacyAction.toggle());
    }
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button onClick={handleCounterIncrement} type="button" className="btn btn-primary">+1</button>
                <button onClick={handleCounterDecrement} type="button" className="btn btn-info">-1</button>
                <button onClick={handlePrivacyToggle} type="button" className="btn btn-warning">Privacy Toggle</button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
                <input type="text" placeholder="Enter no.." className="number-input" ref={numberElement} />
                <button onClick={handleAddition} type="button" className="btn btn-success">+</button>
                <button onClick={handleSubtraction} type="button" className="btn btn-danger">-</button>
            </div>
        </>
    )
}

export default Controlls;