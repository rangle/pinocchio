export const INCREMENT_REQUESTED = 'testcases/INCREMENT_REQUESTED'
export const INCREMENT = 'testcases/INCREMENT'
export const SELECT_TEST_CASE = 'testcases/SELECT_TEST_CASE'
export const UNSELECT_TEST_CASE = 'testcases/UNSELECT_TEST_CASE'
export const DECREMENT_REQUESTED = 'testcases/DECREMENT_REQUESTED'
export const DECREMENT = 'testcases/DECREMENT'
export const PROCESS_LIST_RESPONSE = 'testcases/PROCESS_LIST_RESPONSE'
export const PROCESS_LIST_ERROR = 'testcases/PROCESS_LIST_ERROR'

const initialState = {
  count: 0,
    selected: null,
    list:[],
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {

      case SELECT_TEST_CASE:
          return {
              ...state,
              selected: (state.selected != action.id) ? action.id : null
          }


      case UNSELECT_TEST_CASE:
          return {
              ...state,
              selected: null
          }


      case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

      case PROCESS_LIST_RESPONSE:
          return {
              ...state,
              count: action.response.length,
              list: [...action.response],
              isIncrementing: !state.isIncrementing
          }

      case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
          list: [...state.list, {id:state.count}],
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
          list: state.list.filter( (x) => x.id != state.count),
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const selectTestCase = (id) => {
    return dispatch => {
        dispatch({
            type: SELECT_TEST_CASE,
            id:id
        })
    }
}

export const unSelectTestCase = () => {
    return dispatch => {
        dispatch({
            type: UNSELECT_TEST_CASE
        })
    }
}

export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });

        return setTimeout(() => {
            dispatch({
                type: INCREMENT
            })
        }, 3000)
    }
}


export const incrementAsyncAPI = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });
        fetch('http://localhost:3001/images').then( response => response.json()).
        then(data =>
            {
                return dispatch({
                    type: PROCESS_LIST_RESPONSE,
                    response: data
                })
            },
            error =>
            alert("ERROR:  " + error))
    }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}
