import React from 'react';
import useStep1 from './useStep';
const Step1 = () => {
    const useStep = useStep1();
    return <div>
        <div className="field">
            <label>Nome</label>
            <input value={useStep.name} onChange={useStep.onChangeName} type="text" />
        </div>
        <div className="field">
            <label>Grupo</label>
            <select value={useStep.grupo} onChange={useStep.onChangeGrupo} >
                <option>Selecione</option>
                {useStep.grupos.map((x) => (<option value={x}>{x}</option>))}
            </select>
        </div>
        <div className="buttons">
            <button>Cancelar</button>
            <button>Próximo</button>
        </div>
    </div>
}
export default Step1;