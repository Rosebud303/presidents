import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';

import getAllPresidents from './thunks/getAllPresidents';
jest.mock('./thunks/getAllPresidents')

describe('App', () => {
  describe('Component', () => {
    
  })

  describe('mapStateToProps', () => {
    it('should have a mapped state prop', () => {
      let mockstate = {
        isLoading: false,
        error: '',
        presidents: []
      }
      let expected = {
        isLoading: false
      }
      const result = mapStateToProps(mockstate)
      expect(result).toEqual(expected)
    })
    
  })
  
  describe('mapDispatchToProps', () => {
    it('should run getAllPresidents with the correct params', () => {
      let mockUrl = 'www.presidents.com';
      let mockDispatch = jest.fn()
      let actionsToDispatch = getAllPresidents(mockUrl)
      let mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getAllPresidents(actionsToDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(actionsToDispatch)
    });
  })
})



it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
