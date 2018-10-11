import schema from './../schemas/index';
import { fromJS } from 'immutable';

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search:[],
})

function data(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // action.payload.query
      let results = []
      const list = state.data.categories[2].playlist;
      if (action.payload.query) {
        results = list.filter((item) => {
          return item.author.includes(action.payload.query)
        })
      }
      return {
        ...state,
          search: results,
      }
    }
    default: 
      return state;
  }
}

export default data;