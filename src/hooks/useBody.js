import {  useCallback, useReducer } from 'react';
import reducerForm, { initialState } from '../reducers/reducerForm';

const useBody = () => {
    const [state, dispatch] = useReducer(reducerForm, initialState);

    const onChange = useCallback(
        (field, value) => {
            dispatch({ type: 'set', payload: { field, value } })
        },
        [ dispatch],
    )

    const onChangeInput = useCallback(
        (event) => {
            dispatch({ type: 'set', payload: { field: event.target.name, value: event.target.value } })
        },
        [dispatch,],
    )

    return {
        state,        
        onChange,
        onChangeInput
    };
}
export default useBody;