import { useContext } from 'react'
import { MainContext, MainProvider } from '../state/main/mainProvider'

const SettersChild = () => {

    const { state, setters, getters } = useContext(MainContext)

    const handleSingleUpdate = () => {
        setters.setNum1(1)
    }

    const handleCustomSetter = () => {
        setters.customSetter()
    }

    const handleAsyncSetter = () => {
        setters.asyncSetter()
    }

    const handleDynamicAsyncSetter = async () => {
        // update state 5 times asynchronously
        // have to use getters so we're always getting the latest state value
        for (let i = 0; i < 5; i++) {
            await setters.setNum1(getters.getNum1() + 1)
        }
    }

    const handleDynamicNestedSetter = () => {
        setters.setNested_str2("Updated a nested value!")
    }


    return (
        <div>
            <button onClick={handleSingleUpdate}>Single Update</button>
            <br />

            <button id="customSetterButton" onClick={handleCustomSetter}>Custom Setters</button>
            <br />

            <button id="asyncSetterButton" onClick={handleAsyncSetter}>Custom Setters</button>
            <br />

            <button id="asyncDynamicSetterButton" onClick={handleDynamicAsyncSetter}>Custom Setters</button>
            <br />
            
            <button id="dynamicNestedSetter" onClick={handleDynamicNestedSetter}>Custom Setters</button>
            <br />


            <h1 id="num1">{state.num1}</h1>
            <h1 id="str1">{state.str1}</h1>
            <h1 id="nestedStr2">{state.nested.str2}</h1>
            
        </div>
    )



}

export default function SettersTest() {
    return (
        <MainProvider>
            <SettersChild />
        </MainProvider>
    )
}
