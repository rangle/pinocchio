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
      <button onClick={props.getTestCases}>Get Test Suite</button>
      <button onClick={props.runTestCases}>Run Test Suite</button>
      <button onClick={props.incrementAsyncAPI}>Set as Baseline</button>
      <button onClick={props.incrementAsyncAPI}>Add Test Case</button>


      <p>Number of Test Cases: {props.count}</p>
      <p>Selected Test Case: {props.selected}</p>
      Test Suite ID : <input type="text" value="August 2" />
      Baseline ID : <input type="text" value="August1" />
      Change Intention:   <input type="text" value="added a new field to UI"  />
      Code Change:   <input type="text" value="git code change log" />
      Code Change Warnings: <input type="text" value="unrelated change to store" />
      Change Approved: <input type="text" value="?" />
      Change Prediction: <input type="text" value="?" />
      <br/><br/>

      Test Cases:

      <table style={{border: 'solid'}}>
          <thead>
          <th>ID</th>
          <th hidden={props.selected !== null}>Action</th>=
          <th hidden={props.selected !== null}>Expectation</th>
          <th hidden={props.selected !== null}>Diff?</th>
          <th hidden={props.selected !== null}>Pass?</th>
          <th hidden={props.selected !== null}>Prediction</th>
          <th hidden={props.selected !== null}>Warnings</th>
          </thead>
          <tbody>
      {props.list.map( l =>
          <tr key={l.id} ><td>
              <div >
          <div onClick={() => props.selectTestCase(l.id)} >{l.id}</div>
              <div hidden={props.selected !== l.id}>

                  Action: <input type='text' value={l.action + l.selector} />
                  Expectation: <input type='text' value={l.expectation} />
                  Difference: <input type='text' value={l.diff} />
                  Pass: <input type='text' value={l.pass} />
                  Prediction: <input type='text' value={l.prediction} />
                  Warnings : <input type='text' value={l.warnings} />

                  <h4>Current Screen:</h4>
              <img  src={'http://localhost:3001/' + l.id + ".png"} style={{width: '100%'}}/>
                  <h4>Baseline Screen:</h4>
              <img  src={'http://localhost:3001/baseline/' + l.id + ".png"} style={{width: '100%'}}/>
              </div>
          </div>
          </td>
              <td hidden={props.selected !== null}>{l.action + l.selector}</td>
              <td hidden={props.selected !== null}>{l.expectation}</td>
              <td hidden={props.selected !== null}>{l.diff}</td>
              <td hidden={props.selected !== null}>{l.pass}</td>
              <td hidden={props.selected !== null}>{l.prediction}</td>
              <td hidden={props.selected !== null}>{l.warnings}</td>
          </tr>
      )}
      </tbody></table>
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
