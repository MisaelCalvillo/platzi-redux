import { 
  SEARCH_ENTITIES, 
  SEARCH_ASYNC_ENTITIES,
  CLOSE_MODAL, 
  OPEN_MODAL,
  IS_LOADING
} from "../action-types";

export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId: mediaId
    } 
  }
}
export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query: query,
    }
  }
}

export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncEntities(query) {
  return (dispatch) => {
      dispatch(isLoading(true));

      setTimeout(() => {
        dispatch(isLoading(false))
        dispatch(searchEntities(query))
      }, 5000)
  }
}


