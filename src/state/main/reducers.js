
const reducers = {

    numReducer(state = {}, action) {
        switch (action.type) {
            case "UPDATE_NUM_1":
                return { ...state, num1: action.payload };
            case "UPDATE_NESTED_NUM_2":
                const newState = JSON.parse(JSON.stringify(state))
                newState.nested.num2 = action.payload
                return newState;
            default:
                return state;
        }
    },

    strReducer(state = {}, action){
        switch (action.type) {
            case "UPDATE_STR_1":
                return { ...state, str1: action.payload };
            case "UPDATE_NESTED_STR_2":
                const newState = JSON.parse(JSON.stringify(state))
                newState.nested.str2 = action.payload
                return newState;
            default:
                return state;
        }
    }



}

export default reducers;
