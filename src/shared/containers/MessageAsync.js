import { connect } from 'react-redux';

import MessageAsync from '../components/Message';

export default connect(({ hello }) => ({
  message: hello.messageAsync
}))(MessageAsync);
