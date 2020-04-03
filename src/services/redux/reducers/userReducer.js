const INITIAL_STATE = {
    logged:false,
    token:"",
    refresh:""
}


export default  (state = INITIAL_STATE,action)=>{
   switch(action.type){
    case 'SET_LOG':
        return{
            ...state,
            logged:action.payload
        }   
    case 'SET_TOKENS':
        console.log(action)
        return{
            ...state,
                token:action.payload.token,
                refresh:action.payload.refresh
        }
    default : return state;
   }
}