import {createStore} from 'redux';

const initState = {
    myList : [
        {
        'title': 'Futurama',
        'id': 1,
        'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        }, 
        {
        'title': 'The Interview',
        'id': 2,
        'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
        'title': 'Gilmore Girls',
        'id': 3,
        'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
        ],

    recommendations : [
            {
            'title': 'Family Guy',
            'id': 4,
            'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
            },
            {
            'title': 'The Croods',
            'id': 5,
            'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
            },
            {
            'title': 'Friends',
            'id': 6,
            'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
            }
        ]

}

export const removeFromList = (item) => {
    return {
      type: 'MOVIE_REMOVE_FROM_LIST',
      item,
    };
}

export const addToList = (item) => {
    return {
      type: 'MOVIE_ADD_TO_LIST',
      item,
    };
}

const myReducer = (state = initState, action) => {
    console.log('Action received: ');
    console.log(action);
    switch (action.type) {
        case 'MOVIE_REMOVE_FROM_LIST':
         let temp1 = state.myList.filter(ele => ele.id !== action.item.id);
         let temp2 = [...state.recommendations, action.item];
          return {...state, myList:temp1, recommendations:temp2};
        case 'MOVIE_ADD_TO_LIST':
         let temp3 = state.recommendations.filter(ele => ele.id !== action.item.id);
         let temp4 = [...state.myList, action.item];
          return {...state, myList:temp4, recommendations:temp3};
        default:
          return state;
      }
  };

const store = createStore(myReducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
