import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import Form from './Form'

describe('<Form />' ,() => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  // full list of assertions here
  // https://facebook.github.io/jest/docs/en/expect.html
  it('contains four options', () => {
    const form = TestUtils.renderIntoDocument(<Form />)
    const options = TestUtils.scryRenderedDOMComponentsWithTag(form, 'option');

    expect(options).toHaveLength(4)
  });

  it('matches snapshot', () => {
    const form = renderer.create(<Form />).toJSON()

    expect(form).toMatchSnapshot()
  });
});