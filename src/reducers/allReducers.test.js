import * as reducers from './allReducers';
import * as actions from '../actions';

describe('LoadReducer', () => {
  it('should have default state', () => {
    const expected = false;
    const result = reducers.loadingReducer(undefined, {})
    expect(result).toEqual(expected)
  });

  it('Should change the state of isLoading', () => {
    const expected = true
    const initialState = false
    const action = actions.isLoading(expected)
    const result = reducers.loadingReducer(initialState, action)
    expect(result).toEqual(expected)
  });
});

describe('ErrorReducer', () => {
  it('should have default state', () => {
    let expected = ''
    let result = reducers.errorReducer(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should set the state for error', () => {
    let expected = 'error'
    let initialState = ''
    let action = actions.hasErrored(expected)
    let result = reducers.errorReducer(initialState, action)
    expect(result).toEqual(expected)
  });
});

describe('PresidentReducer', () => {
  it('should have default state', () => {
    let expected = []
    let result = reducers.setPresidentsReducer(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should set the state for president when called', () => {
    let expected = [{id:1}, {id:2}]
    let initialState = []
    let action =  actions.setPresidents(expected)
    let result = reducers.setPresidentsReducer(initialState, action)
    expect(result).toEqual(expected)
  });
})


