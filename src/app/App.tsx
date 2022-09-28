import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

export const App = () => {
	const {theme, toggleTheme} = useTheme();

  return (
	<div className={classNames('app', {}, [theme])}>
		<button onClick={toggleTheme}>Toggle</button>
		<Link to='/'>Main</Link>
		<Link to='/about'>About</Link>
		<AppRouter />
	</div>
  )
}
