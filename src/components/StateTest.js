import { useContext } from 'react'

import { MainContext, MainProvider } from '../state/main/mainProvider';


const StateChild = () => {
    const { state } = useContext(MainContext)
    return (
        <>
            <h1>{state.num1}</h1>
            <h1>{state.str1}</h1>
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
