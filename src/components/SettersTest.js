import { useContext } from 'react'
import { MainContext, MainProvider } from '../state/main/mainProvider'

const SettersChild = () => {
    
    const {state, setters} = useContext(MainContext)
    
    const handleClick = () => {
        setters.setNum1(1)
    }
    
    return (
        <div>
            <button onClick={handleClick}>Single Update</button>
            <br/>
            <h1>{state.num1}</h1>
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
