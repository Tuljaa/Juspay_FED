import { createSlice } from '@reduxjs/toolkit'


export const Reducer = createSlice({

 name: 'counter',
 initialState: {
    value: "",
    x:0,
    y:0,
    degree:0,
    visibility:'visible',
    strs:'',
    time:0,
    size:'100',
    color:'#FFAB19'  
},
 
  reducers: {
    updateCordinates: (state,action) =>{
        const updatedCreds=action.payload;
    
        if(updatedCreds.y!=undefined){
            state.y=updatedCreds.y
        }
        if(updatedCreds.x!=undefined){
            state.x=updatedCreds.x
        }
        if(updatedCreds.degree!=undefined){
            state.degree=updatedCreds.degree
        }
        if(updatedCreds.str!=undefined){
            state.strs=updatedCreds.str
        }
        if(updatedCreds.time!=undefined){
            state.time=updatedCreds.time
        }
        if(updatedCreds.color!=undefined){
            state.color=updatedCreds.color
        }
        if(updatedCreds.size!=undefined){
            state.size=updatedCreds.size
        }
       
       /*  console.log(action.payload,"In Update") */
    },
    move: (state,action) => {
        state.value="move"
        if(action.payload.x!=undefined){
            state.x=state.x+action.payload.x
        }
        if(action.payload.y!=undefined){
            state.y=state.y+action.payload.y
        }
        console.log("In Move",action.payload.x)
    },
    turn: (state,action) => {
        state.value="rotate"
        if(action.payload.degree!=undefined){
            state.degree=action.payload.degree
        }
        console.log(action.payload,"In Turn Clokwise")
    },
    GoToXY: (state) =>{
        state.value="GoTo"
            console.log("In GoTo")
    },
    say2Sec: (state,action) => {
        if(action.payload.str!=undefined){
            state.strs=action.payload.str
        }
        if(action.payload.time!=undefined){
            state.time=action.payload.time
        }
        state.value="say2Sec"
        console.log(state.strs,"In say2Sec")
    },
    hide:(state,action)=>{
        state.visibility="hidden"
        console.log(action.payload,"In HIDE")
    },
    show: (state,action)=>{
        state.visibility="visible"
        console.log(action.payload,"In Show")
    },
    changecolor:(state,action)=>{
        state.color=action.payload.color
        console.log(action.payload,"In ChangeColor")
    },
    changesize:(state,action)=>{
        state.size=action.payload.size
        console.log(action.payload.size,"In ChangeSize")
    }, 
  }
})

// Action creators are generated for each case reducer function
export const { turn, move, say2Sec, updateCordinates, GoToXY, hide,show,changecolor, changesize } = Reducer.actions

export default Reducer.reducer