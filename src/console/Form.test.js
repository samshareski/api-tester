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

  it('matches default snapshot', () => {
    const submitFormData = jest.fn()
    const form = renderer
      .create(<Form submitFormData={submitFormData} />)
      .toJSON()

    expect(form).toMatchSnapshot()
  })

  it('submits the form with valid values when button clicked', () => {
    const submitFormData = jest.fn()
    const fakeAPIUrl = 'https://fake.com/api/'
    const fakeJSONBody = '{"foo": "bar"}'
    const formMethod = 'POST'

    const root = TestUtils.renderIntoDocument(
      <Form submitFormData={submitFormData} />
    )
    const form = TestUtils.findRenderedDOMComponentWithTag(root, 'form')

    const methodSelect = ReactDOM.findDOMNode(root).querySelector('select')

    TestUtils.Simulate.change(methodSelect, { target: { value: formMethod } })

    const urlInput = ReactDOM.findDOMNode(root).querySelector(
      'input[name="url"]'
    )
    const bodyInput = ReactDOM.findDOMNode(root).querySelector('textarea')

    TestUtils.Simulate.change(urlInput, { target: { value: fakeAPIUrl } })
    TestUtils.Simulate.change(bodyInput, { target: { value: fakeJSONBody } })
    TestUtils.Simulate.submit(form)

    expect(submitFormData).toHaveBeenCalledWith({
      body: fakeJSONBody,
      method: formMethod,
      url: fakeAPIUrl
    })
  })
})
