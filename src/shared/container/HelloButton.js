import { connect } from 'react-redux';

import { sayHello } from '../action/hello';
import Button from '../component/Button';

export default connect(() => ({
  label: 'Say hello'
}), dispatch => ({
  handleClick: () => { dispatch(sayHello('Hello!')); }
}))(Button);
