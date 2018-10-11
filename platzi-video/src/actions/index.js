import { 
  SEARCH_ENTITIES, 
  SEARCH_ASYNC_ENTITIES,
  CLOSE_MODAL, 
  OPEN_MODAL 
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
export function searchAsyncEntities(query) {
  return (dispatch) => {
      setTimeout(() => {
        dispatch(searchEntities(query))
      }, 5000)
  }
}


