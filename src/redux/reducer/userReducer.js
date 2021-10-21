


// tasks : tasks, initialAmount, costs, currentBalance, sort

const initialState = {
    name: ''
}

export const userReducer = (state = initialState, action) => {


    switch(action.type){

        case "ENTER_NAME":
            return {...state, name: action.payload}

        default :
            return state
    }
}