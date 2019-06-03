import React from 'react'
import { CardContainer, mapStateToProps } from './CardContainer'
import { shallow } from 'enzyme'

describe('CardContainer', () => {
  describe('Component', () => {
    // let wrapper;

    // beforeEach(() => {
    //   wrapper = shallow(
    //     <CardContainer />
    //   )
    // });

    // it('should match the snapshot', () => {
    //   expect(wrapper).toMatchSnapshot()
    // })
  })
  
  describe('mapStateToProps', () => {
    it('should have a mapped state prop', () => {
      let mockstate = {
        isLoading: false,
        error: '',
        presidents: []
      }
      let expected = {
        presidents: []
      }
      const result = mapStateToProps(mockstate)
      expect(result).toEqual(expected)
    })
  });
})
