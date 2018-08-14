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
      <button onClick={props.getTestCases}>Get Tests</button>
      <button onClick={props.runTestCases}>Run Tests</button>
      <button onClick={props.incrementAsyncAPI}>Approve</button>
      <button onClick={props.incrementAsyncAPI}>Reject</button>
      <button onClick={props.incrementAsyncAPI}>Add Test Case</button>
      <div>
      Project Folder : <input type="text" value="/sampleapp" />
      Project URL : <input type="text" value="http://localhost:3000" />
      </div>

      <p hidden={props.selected === null}
onClick={() => props.selectTestCase(props.selected)} >Selected Test Case: {props.selected}</p>

    <div hidden={props.selected !== null}>
      <p>Commit DateTime : {props.changeDateTime.toLocaleTimeString()}</p>
      <p>Change Intention:   <textarea rows="2" cols="50" value="added a new field to enter last name in heros detail page"  /></p>
      <p>ML Warnings:  <textarea rows="2" cols="50" value="unrelated change to package.json"  /></p>
      <p> ML Approval Prediction: 90%
      QA Approved: <input type="checkbox" value="false" /></p>
      <br/><br/>
    </div>

      Test Cases ({props.count}):

      <table style={{border: 'solid'}}>
          <thead>
          <th hidden={props.selected !== null}>ID</th>
          <th hidden={props.selected !== null}>Action</th>
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
          <div onClick={() => props.selectTestCase(l.id)} >
<p hidden={props.selected && props.selected !== l.id}>{l.id}</p>
</div>
              <div hidden={props.selected !== l.id}>
                  Action: <input type='text' value={l.action + l.selector} />
                  Expectation: <input type='text' value={l.expectation} />
                  Difference: <input type='text' value={l.diff} />
                  Pass: <input type='text' value={l.pass} />
                  Prediction: <input type='text' value={l.prediction} />
                  Warnings : <input type='text' value={l.warnings} />

                  <h4>Current Screen:</h4>
              <img  src={'http://localhost:3001/current/' + l.id + ".png"} style={{width: '100%'}}/>
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
    changeDateTime: testcases.changeDateTime,
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
