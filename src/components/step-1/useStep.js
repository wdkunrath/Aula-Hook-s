import { useCallback, useContext, useEffect, useState } from 'react';
import StepFormContext from '../../contexts/StepFormContext';

const useStep1 = () => {
    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        setGrupos(["Grupo A", "Grupo B", "Grupo C"]);
    }, []);

    const { state: { name, grupo }, onChange } = useContext(StepFormContext);
    const onChangeName = useCallback(
        (event) => {
            onChange('name', event.target.value);
        },
        [onChange]
    );
    const onChangeGrupo = useCallback(
        (event) => {
            onChange('grupo', event.target.value);
        },
        [onChange],
    );
    return { onChangeName, onChangeGrupo, name, grupo, grupos }
}
export default useStep1;