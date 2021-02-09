import { useContext } from 'react'

import { MainContext, MainProvider } from '../state/main/mainProvider';


const StateChild = () => {
    const { state, getters } = useContext(MainContext)
    return (
        <>
            <h1 id="state-num1">{state.num1}</h1>
            <h1 id="state-str1">{state.str1}</h1>
            
            <h1 id="getters-num1">{getters.getNum1()}</h1>
            <h1 id="getters-str1">{getters.getStr1()}</h1>
            
            <h1 id="nested-num2">{getters.getNested_num2()}</h1>
            <h1 id="nested-str2">{getters.getNested_str2()}</h1>

            <h1 id="getterKeys">{Object.keys(getters).join(" ")}</h1>
        </>
    )
}


export default function StateTest() {


    return (
        <MainProvider>
            <StateChild />
        </MainProvider>

    )
}
