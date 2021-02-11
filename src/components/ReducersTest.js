import React, { useContext, useState } from 'react'
import { MainContext, MainProvider } from '../state/main/mainProvider'


const ReducersChild = () => {

    const {state, reducers} = useContext(MainContext)
    const {numReducer, strReducer} = reducers;

    const [stateString, setStateString] = useState("")

    // EVENTS
    const handleUpdate = param => e => {
        switch(param){
            case "num1":
                numReducer.dispatch(state, {type: "UPDATE_NUM_1", payload: 1})
                break;
            case "num2":
                numReducer.dispatch(state, {type: "UPDATE_NESTED_NUM_2", payload: 100})
                break;
            case "str1":
                strReducer.dispatch(state, {type: "UPDATE_STR_1", payload: "New String 1"})
                break;
            case "str2":
                strReducer.dispatch(state, {type: "UPDATE_NESTED_STR_2", payload: "New Nested String"})
                break;
        }
    }

    const triggerStateChange = async () => {
        const newState = await strReducer.dispatch(state, {type: "UPDATE_IGNORED_STATE", payload: "This is a new string"})
        setStateString(JSON.stringify(newState))
    }

    return (
        <div>

            <h1 id="reducerKeys">{Object.keys(reducers).join(" ")}</h1>
            
            <h1 id="stateString">{stateString}</h1>
            <button id="updateStateString" onClick={triggerStateChange}>Trigger State Change</button>

            <h1 id="num1">{state.num1}</h1>
            <button id="updateNum1" onClick={handleUpdate("num1")}>Update Num 1</button>
            
            <h1 id="num2">{state.nested.num2}</h1>
            <button id="updateNum2" onClick={handleUpdate("num2")}>Update Num 2</button>
            
            <h1 id="str1">{state.str1}</h1>
            <button id="updateStr1" onClick={handleUpdate("str1")}>Update Str 1</button>
            
            <h1 id="str2">{state.nested.str2}</h1>
            <button id="updateStr2" onClick={handleUpdate("str2")}>Update Str 2</button>

            
        </div>
    )
}

export default function ReducersTest() {
    return (
        <MainProvider>
            <ReducersChild />
        </MainProvider>
    )
}
