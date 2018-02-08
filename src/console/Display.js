import React from 'react'

const Display = ({ response }) => (
  <pre>{response !== null ? response : 'Press TEST to test API'}</pre>
)

export default Display
