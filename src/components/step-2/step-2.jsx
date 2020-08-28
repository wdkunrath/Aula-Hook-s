import React, { useContext } from 'react';
import StepFormContext from '../../contexts/StepFormContext';
const Step2 = () => {
    const { onChangeInput, state: { phone, birthday } } = useContext(StepFormContext)
    return <div>
        <div className="field">
            <label>
                Telefone
            </label>
            <input name="phone" value={phone} onChange={onChangeInput} type="text" />
        </div>
        <div className="field">
            <label>Data de Nascimento</label>
            <input name="birthday" onChange={onChangeInput} value={birthday} type="text" />
        </div>
        <div className="buttons">
            <button>Anterior</button>
            <button>Finalizar</button>
        </div>
    </div>
}
export default Step2;