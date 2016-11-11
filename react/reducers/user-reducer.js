const initialState = {};

export default function users(state = initialState, action){
  switch (action.type){
      case 'ADD_USER':
        return Object.assign({}, state, {[action.user]:action.user});
      default:
        return state;
  }
}
