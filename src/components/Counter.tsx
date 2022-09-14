import { useState } from 'react'
import classes from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	}
  return (
	<button className={classes.btn} onClick={increment}>Counter++ : {count}</button>
  )
}