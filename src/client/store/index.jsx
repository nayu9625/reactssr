import { createStore } from 'redux';
const initialState = {
  name: 'init',
  address: '初始地址',
}
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_DATA':
       return {
         ...state,
         ...action.payload,
       };
    default: 
      return state;
  }
}

export const createClientStore = () => {
  return createStore(reducer, window.REDUX_STATE); // 用完要刪除 避免全局變量污染
}

export const createServerStore = () => {
  return createStore(reducer); // 服務端沒有window
}