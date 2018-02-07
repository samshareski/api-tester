import React from 'react'

const Display = ({ response }) => (
  <p>{response !== null ? response : 'Press TEST to test API'}</p>
)

export default Display
