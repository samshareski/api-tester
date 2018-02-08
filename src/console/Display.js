import React from 'react'

const Display = ({ response }) => {
  if (response === null) {
    return <p>Press TEST to test API</p>
  } else {
    return (
      <div>
        <p>Response is {response.ok ? 'OK' : 'not OK'}</p>
        <pre>{response.json}</pre>
      </div>
    )
  }
}

export default Display
