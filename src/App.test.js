import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without crashing', () => {
    const app = shallow(<App />)
    expect(app.find('h1').text()).toEqual('React API Tester')
  })
})
