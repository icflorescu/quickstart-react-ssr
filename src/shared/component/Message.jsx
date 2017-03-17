import React, { PropTypes } from 'react';

const Message = ({ message }) =>
  <p>{message}</p>;

Message.propTypes = {
  message: PropTypes.string
};

Message.defaultProps = {
  message: 'default from component'
};

export default Message;
