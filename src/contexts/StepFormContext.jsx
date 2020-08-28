import React from 'react';
import useBody from '../hooks/useBody';

const context = React.createContext();

export const StepFormContext = ({ children }) => {
    const use = useBody();
    return <context.Provider value={use}>
        {children}
    </context.Provider>
}
export default context;