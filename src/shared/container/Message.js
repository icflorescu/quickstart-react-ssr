import { connect } from 'react-redux';

import Message from '../component/Message';

export default connect(state => ({
  message: state.hello.message
}))(Message);
