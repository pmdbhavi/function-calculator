import {useState} from 'react'

import {Maincontainer,Con1,Heading,Label,Input,Para,Con2,Img} from './styledComponents'

const LettersCalculator=()=>{
    const [count,setCount]=useState(0)

    const onCount=(event)=>{
        setCount(event.target.value.length)
    }
    return(
        <Maincontainer>
            <Con1>
                <Heading>Calculate the Letters you enter</Heading>
                <Label htmlFor="input">Enter the phrase</Label>
                <Input id="input" type="text" placeholder="Enter the phrase" onChange={onCount}/>
                <Para>No.of letters: {count}</Para>
            </Con1>
            <Con2>
                <Img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters calculator"/>
            </Con2>
        </Maincontainer>
    )
}

export default LettersCalculator