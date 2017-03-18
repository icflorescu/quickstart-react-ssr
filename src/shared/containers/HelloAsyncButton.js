import { connect } from 'react-redux';

import { sayHelloAsync } from '../actions/hello';
import Button from '../components/Button';

export default connect(() => ({
  label: 'Say hello asynchronously and send 1234'
}), dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(1234)); }
}))(Button);
