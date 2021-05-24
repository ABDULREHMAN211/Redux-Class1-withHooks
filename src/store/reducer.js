

 // var user = { name: "ARB", email: "abc@gmail.com"}

 //  var newUserOld = user;

 // var newUser = {...user, name: "Hassan", age: 20}


const initialState = {
    Counter: 0
}
export const counterReducer = (state=initialState, action)=>{
       switch(action.type) {
           case "INCREMENT": {
               return { ...state, Counter: state.Counter+1 }
           }
           case "DECREMENT": {
               return {
                   ...state, Counter: state.Counter-1
               }
           }
           case "INCREMENT_BY_AMOUNT": {
               return {
                   ...state, Counter: state.Counter + action.payload
               }
           }
           default: {
               return state
           }
       }
}