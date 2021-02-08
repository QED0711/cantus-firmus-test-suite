import React, { useContext } from 'react'
import { MainContext, MainProvider } from '../state/main/mainProvider'

const MethodsChild = () => {

    const providerValue = useContext(MainContext)
    const {state, methods, someNamespacedMethods} = providerValue;

    // EVENTS
    const increment = () => {
        methods.incrementCountBy2()
    }

    return(
        <div>
            <button id="methodsIncrementButton" onClick={increment}>increment by 2</button>
            <h1 id="num1">{methods.get("num1")}</h1>
            <h1 id="str1">{someNamespacedMethods.retrieveValue("str1")}</h1>

            <h1 id="thisKeyword">{methods.thisKeyword()}</h1>

            <h1 id="providerValueKeys">{Object.keys(providerValue)}</h1>
        </div>
    )

}

export default function MethodsTest() {
    
    return (
        <MainProvider>
            <MethodsChild />
        </MainProvider>
    )
}
