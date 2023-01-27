import React, { useReducer , useEffect} from 'react'
import {reducer} from './reducer'
const Api = "https://hn.algolia.com/api/v1/search?";
// context creation 
// provider
// consumer is lengthly process then it is replace by 
// useContext hook
const AppContext = React.createContext()  // context creation 
const initialState = {
    isLoading : true,
    query : "html",
    nbPages : 0,
    page : 0,
    hits :[]
};

// to create a provider function (provider work as a deilvary person)
const AppProvider = ({children}) =>{
    // const [state , setState] = useState(initialState);
    const [state , dispatch] = useReducer(reducer,initialState);
   

    const fetchApiData =async(url)=>{
      try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        dispatch({
            type: "Get_Stories",
            payload :{
                hits : data.hits,
                nbPages : data.nbPages,
            },
    });
      }catch(error){
          console.log(error);
      }
    }
    useEffect(()=>{
       fetchApiData(`${Api}query=${state.query}&page=${state.page}`);
    },[]);

    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
};
export {AppContext , AppProvider}