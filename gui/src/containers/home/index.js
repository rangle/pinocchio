import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    selectTestCase,
    runTestCases,
    getTestCases,
    unSelectTestCase,
    incrementAsyncAPI
} from '../../modules/testcases'

const Home = props => (
  <div>
      <button onClick={props.getTestCases}>Get Test Cases</button>
      <button onClick={props.runTestCases}>Run Test Cases</button>
      <button onClick={props.incrementAsyncAPI}>Get Test Results</button>
      <p>Number of Test Cases: {props.count}</p>
      <p>Selected Test Case: {props.selected}</p>


      Test Cases:

      {props.list.map( l =>
          <div key={l.id} onClick={() => props.selectTestCase(l.id)}>
          <div >{l.id}</div>
              <div hidden={props.selected !== l.id}>
                  <h4>Current:</h4>
              <img  src={'http://localhost:3001/' + l.id} style={{width: '100%'}}/>
                  <h4>Baseline:</h4>
              <img  src={'http://localhost:3001/' + l.id} style={{width: '100%'}}/>
              </div>
          </div>

      )}

      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
  </div>
)

const mapStateToProps = ({ testcases }) => ({
    selected: testcases.selected,
    list: testcases.list,
  count: testcases.count,
  isIncrementing: testcases.isIncrementing,
  isDecrementing: testcases.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        selectTestCase,
        runTestCases,
        getTestCases,
        unSelectTestCase,
        incrementAsyncAPI,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
