import React, { PropTypes } from 'react';

const Message = ({ message }) =>
  <p>{message}</p>;

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
