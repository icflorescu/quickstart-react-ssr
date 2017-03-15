import { connect } from 'react-redux';

import { sayHelloAsync } from '../action/hello';
import Button from '../component/Button';

export default connect(() => ({
  label: 'Say hello asynchronously and send 1234'
}), dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(1234)); }
}))(Button);
