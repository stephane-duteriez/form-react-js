import {bindActionCreators, createStore} from 'redux';
import {REST_ADR, REST_ENDPOINT} from '../configue/configue';

const initialState={
    memes:[],
    images:[],
    currentMeme:{
        id: "",
        name : 'erf',
        text:{x:0,y:0,value:'', underline:false, bold:false, color:"#555555"},
        imageId: 0,
        font:"Arial"
      }
};
const REDUCER_ACTIONS=Object.seal({
    ADD_IMAGE: 'ADD_IMAGE',
    ADD_IMAGES: 'ADD_IMAGES',
    ADD_MEME:'ADD_MEME',
    ADD_MEMES:'ADD_MEMES',
    SET_CURRENT:'SET_CURRENT',
    CLEAR_CURRENT:'CLEAR_CURRENT',
    CHANGE_MEME:'CHANGE_MEME',
    SET_CURRENT_MEME_ID:'SET_CURRENT_MEME_ID'
});

const PRIVATE_REDUCER_ACTIONS=Object.seal({
    INIT:'INIT',
})

function reducer(state=initialState,action) {
    const typeaction=action.type.includes('@@redux/INIT')?PRIVATE_REDUCER_ACTIONS.INIT:action.type;
    switch(typeaction) {
        //initialisation
        case PRIVATE_REDUCER_ACTIONS.INIT :
            fetch(`${REST_ADR}${REST_ENDPOINT.IMAGES}`)
            .then(f=>f.json())
            .then(arr=>{
              store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGES, values:arr})
              return arr;
            })
            fetch(`${REST_ADR}${REST_ENDPOINT.MEMES}`)
            .then(f=>f.json(), f=>[])
            .then(arr=>{
              store.dispatch({type:REDUCER_ACTIONS.ADD_MEMES, values:arr})
              return arr;
            })
            return state
        case REDUCER_ACTIONS.ADD_MEME: return {...state, memes:[...state.memes, action.value]};
        case REDUCER_ACTIONS.ADD_MEMES: return {...state, memes:[...state.memes, ...action.values]};
        case REDUCER_ACTIONS.ADD_IMAGE: return {...state, images:[...state.images, action.value]};
        case REDUCER_ACTIONS.ADD_IMAGES: return {...state, images:[...state.images, ...action.values]};
        case REDUCER_ACTIONS.SET_CURRENT: return {...state, currentMeme: action.value};
        case REDUCER_ACTIONS.CLEAR_CURRENT: return {...state, currentMeme: initialState.currentMeme};
        case REDUCER_ACTIONS.CHANGE_MEME: {
            if (action.value.id) {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(action.value)
                }
                fetch(`${REST_ADR}${REST_ENDPOINT.MEMES}\\${action.value.id}`, requestOptions)
                return {
                    ...state, memes : state.memes.map((meme)=>{
                        if (meme.id === action.value.id) return action.value;
                        else {
                            return meme;
                        }
                    })
                }
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(action.value)
            }
            fetch(`${REST_ADR}${REST_ENDPOINT.MEMES}`, requestOptions)
            action.value.id = state.memes.length
            return {...state, memes : [...state.memes, action.value]}
        }
        case REDUCER_ACTIONS.SET_CURRENT_MEME_ID: {
            const meme = state.memes.find((e)=>e.id===action.value)
            return {...state, currentMeme: meme || initialState.currentMeme};

        }
        default : return state;
    }
}

const store=createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});export default store;
export {REDUCER_ACTIONS, initialState};