import * as actions from './index';

describe('actions', () => {
  it('should set in store array of presidents', () => {
    let presidents = [{number: 1 , president: 'George'},{number: 2, president: 'John'}]
    let expected ={
      type: 'SET_PRESIDENTS',
      presidents
    }
    let result = actions.setPresidents(presidents)
    expect(result).toEqual(expected)
  });

  it('should set in store its boolean', () => {
    let boolean = true;
    let expected = {
      type: 'IS_LOADING',
      isLoading: boolean
    }
    let result = actions.isLoading(boolean)
    expect(result).toEqual(expected)
  });

  it('should set an error message', () => {
    let message = 'error'
    let expected = {
      type: 'HAS_ERRORED',
      message
    }
    let result = actions.hasErrored(message)
    expect(result).toEqual(expected)
  })
})
