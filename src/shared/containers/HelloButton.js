import { connect } from 'react-redux';

import { sayHello } from '../actions/hello';
import Button from '../components/Button';

export default connect(() => ({
  label: 'Say hello'
}), dispatch => ({
  handleClick: () => { dispatch(sayHello('Hello!')); }
}))(Button);
