import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  incrementAsyncAPI,
  decrement,
  decrementAsync,
} from '../../modules/counter'

const Home = props => (
  <div>
    <h3>Home</h3>
      <button onClick={props.incrementAsyncAPI}>Get Test Cases Results</button>
      <p>Number of Test Cases: {props.count}</p>


      Test Cases:

      {props.list.map( l => <div key={l.id}>{l.id}</div> )}
    
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
  </div>
)

const mapStateToProps = ({ counter }) => ({
    list: counter.list,
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
        incrementAsyncAPI,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
