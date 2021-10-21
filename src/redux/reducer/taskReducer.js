// tasks : tasks, initialAmount, costs, currentBalance, sort

const initialState = {
  tasks: [],
  initialAmount : 400,
  costs: 0,
  currentBalance: 400,
  sort:  'asc'
}

export const taskReducer = (state = initialState, action) => {


    switch (action.type) {

        case "ADD_TASKS":
            return {...state, tasks: [...state.tasks, action.payload],
            currentBalance: state.currentBalance - +action.payload.amount,
            costs: state.costs + +action.payload.amount
            }
        case 'REMOVE_TASK':
            const task = state.tasks[action.payload]
            console.log(task)
            return {...state, tasks: state.tasks.filter((el, idx) => idx !== action.payload),
              currentBalance : state.currentBalance + task.amount, costs: state.costs - task.amount
            }

        case "SORT_TASKS":

            state.tasks.sort((a,b) => {
                return  state.sort === 'asc' ? a.amount - b.amount : b.amount - a.amount
            })

            return {...state, tasks: [...state.tasks], sort: state.sort === 'asc' ? 'desc' : 'asc' }

        case 'RESET_ALL':
            return initialState
        default :
            return state
    }

}