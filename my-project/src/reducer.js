const reducer = (state , action)=>{
  
        switch(action.type = "s"){
            case "Get_Stories" :
            return{
            ...state,
            hits : action.payload.hits,
            // nbpages : action.payload.nbPages,

            };
            default:
        }
       
 
    return state;
 };
 export  {reducer};