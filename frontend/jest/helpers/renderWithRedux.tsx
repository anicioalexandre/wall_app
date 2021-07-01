import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducers from '../../src/redux/reducer'

const renderWithRedux = (
  component: any,
  {
    initialState,
    store = createStore(rootReducers, initialState, applyMiddleware(thunk))
  }: any = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
}

export default renderWithRedux
