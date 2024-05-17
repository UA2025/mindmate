const initialState = {
    userId: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_ID':
            return {
                ...state,
                userId: action.payload
            };
        default:
            return state;
    }
};
const getUserId = (state) => state.userId;
export default userReducer;
export { getUserId };
