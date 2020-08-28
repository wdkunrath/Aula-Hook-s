export const initialState = { name: 'hirano', grupo: '', phone: '', birthday: '' };

const reducer = (state, action) => {
    switch (action.type) {
        case 'set':
            const { field, value } = action.payload;
            console.log({ field, value });
            return { ...state, [field]: value }
        default:
            return state;
    }
}

export default reducer;