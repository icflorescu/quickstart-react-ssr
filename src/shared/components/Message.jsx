import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => <p>{message}</p>;

Message.propTypes = {
  message: PropTypes.string
};

Message.defaultProps = {
  message: 'default from component'
};

export default Message;
