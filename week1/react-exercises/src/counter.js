import React,{useState} from 'react';
import Button from './button';
import Count from './count';

const Counter = ()=>{
const [count , setCount] = useState(0);
const feedback = count>10? "It's higher than 10!":"Keep counting...";
return(
    <>
    <h1>{feedback}</h1>
    <Count count={count}/>
    <Button setCount={setCount}/>
    </>
)
}
export default Counter;