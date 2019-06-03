import fetchAll from './fetchAll';
import { isLoading, hasErrored, setPresidents } from '../actions'

const getAllPresidents = (url) => {
  return async (dispatch) => {
    try{
      dispatch(isLoading(true))
      const presidents = await fetchAll(url)
      dispatch(isLoading(false))
      dispatch(setPresidents(presidents))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export default getAllPresidents;