export const INCREMENT_REQUESTED = 'testcases/INCREMENT_REQUESTED'
export const SELECT_TEST_CASE = 'testcases/SELECT_TEST_CASE'
export const UNSELECT_TEST_CASE = 'testcases/UNSELECT_TEST_CASE'

export const PROCESS_LIST_RESPONSE = 'testcases/PROCESS_LIST_RESPONSE'
export const PROCESS_LIST_ERROR = 'testcases/PROCESS_LIST_ERROR'

export const RUN_TEST_CASES = 'testcases/RUN_TEST_CASES'
export const RUN_TEST_CASES_SUCCESS= 'testcases/RUN_TEST_CASES_SUCCESS'
export const RUN_TEST_CASES_ERROR = 'testcases/RUN_TEST_CASES_ERROR'

export const GET_TEST_CASES = 'testcases/GET_TEST_CASES'
export const GET_TEST_CASES_SUCCESS= 'testcases/GET_TEST_CASES_SUCCESS'
export const GET_TEST_CASES_ERROR = 'testcases/GET_TEST_CASES_ERROR'

const initialState = {
    count: 0,
    selected: null,
    list:[],
    testCasesRunning: false
}

export default (state = initialState, action) => {
  switch (action.type) {

      case RUN_TEST_CASES:
          return {
              ...state,
              testCasesRunning: true
          }

      case GET_TEST_CASES:
          return {
              ...state
          }

      case RUN_TEST_CASES_SUCCESS:
          return {
              ...state,
              count: action.response.length,
              list: [...action.response],
              isIncrementing: !state.isIncrementing,
              testCasesRunning: false
          }

      case RUN_TEST_CASES_ERROR:
          return {
              ...state,
              testCasesRunning: false
          }

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

      case GET_TEST_CASES_SUCCESS:
          return {
              ...state,
              count: action.response.length,
              list: [...action.response.tests],
              isIncrementing: !state.isIncrementing
          }

      case PROCESS_LIST_RESPONSE:
          return {
              ...state,
              count: action.response.length,
              list: [...action.response],
              isIncrementing: !state.isIncrementing
          }


    default:
      return state
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


export const getTestCases = () => {
    return dispatch => {
        dispatch({
            type: GET_TEST_CASES
        })
        fetch('http://localhost:3001/gettestcases').then( response => response.json()).
        then(data =>
            {
                return dispatch({
                    type: GET_TEST_CASES_SUCCESS,
                    response: data
                })
            },
            error =>
                alert("ERROR:  " + error))
    }
}


export const runTestCases = () => {
    return dispatch => {
        dispatch({
            type: RUN_TEST_CASES
        })
        fetch('http://localhost:3001/runtestcases').then( response => response.json()).
        then(data =>
            {
                return dispatch({
                    type: RUN_TEST_CASES_SUCCESS,
                    response: data
                })
            },
            error =>
                alert("ERROR:  " + error))
    }
}

export const unSelectTestCase = () => {
    return dispatch => {
        dispatch({
            type: UNSELECT_TEST_CASE
        })
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
