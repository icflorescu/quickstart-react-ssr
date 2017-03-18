import { connect } from 'react-redux';

import Message from '../components/Message';

export default connect(({ hello }) => ({
  message: hello.message
}))(Message);
