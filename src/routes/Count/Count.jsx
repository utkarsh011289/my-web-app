"use client"
import React ,{Fragment} from 'react'
import  styles from './Count.module.css'

export const Count = () => {
  const [count, setCount]= React.useState(0);
const fnIncrement = () =>{
         setCount(count+1);
}

  return (<Fragment >
    <div data-testId="count" className={styles.clr}>Count</div>
    <h1>{count}</h1>
    <button onClick={fnIncrement}>Increment</button>
    </Fragment>
  )
}
