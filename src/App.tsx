import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
	const {theme, toggleTheme} = useTheme();

  return (
	<div className={classNames('app', {first: true, second: false, third: true}, [theme, 'dopFroArr'])}>
		<button onClick={toggleTheme}>Toggle</button>
		<Link to='/'>Main</Link>
		<Link to='/about'>About</Link>
		<Suspense fallback={<div>Loading chunk...</div>}>
			<Routes>
				<Route path='/' element={<MainPageAsync />} />
				<Route path='/about' element={<AboutPageAsync />} />
			</Routes>
		</Suspense>
	</div>
  )
}