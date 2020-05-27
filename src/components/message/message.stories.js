import React from 'react'
import Message from './message'

export default { title: 'Message', component: Message }

export const withText = () => <Message text="Hello World" color="green" />
