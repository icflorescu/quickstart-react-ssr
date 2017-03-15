import { connect } from 'react-redux';

import MessageAsync from '../component/Message';

export default connect(state => ({
  message: state.hello.messageAsync
}))(MessageAsync);
