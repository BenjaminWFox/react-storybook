import React from 'react'
import PropTypes from 'prop-types'

const Message = function Message({ text, color }) {
  return (<div style={{ color }}>{text}</div>)
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Message
