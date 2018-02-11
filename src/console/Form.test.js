import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import Form from './Form'

describe('<Form />', () => {
  it('renders without crashing', () => {
    const submitFormData = jest.fn()
    const div = document.createElement('div')
    ReactDOM.render(<Form submitFormData={submitFormData} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  // full list of assertions here
  // https://facebook.github.io/jest/docs/en/expect.html
  it('contains four options', () => {
    const submitFormData = jest.fn()
    const form = TestUtils.renderIntoDocument(
      <Form submitFormData={submitFormData} />
    )
    const options = TestUtils.scryRenderedDOMComponentsWithTag(form, 'option')

    expect(options).toHaveLength(4)
  })

  it('matches snapshot', () => {
    const submitFormData = jest.fn()
    const form = renderer
      .create(<Form submitFormData={submitFormData} />)
      .toJSON()

    expect(form).toMatchSnapshot()
  })
})
