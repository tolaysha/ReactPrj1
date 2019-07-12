import React from 'react';
//import logo from './logo.svg';
import './App.css';
const App = () => {
	
	return (<React.Fragment> 
				<p>Всем привет, я компонент App</p> 
				<News/>
			</React.Fragment>
	)

}
const News = () => {
	return <p>К сожалению, новостей нет</p>
  }
class BigApp extends React.Component {
	render() {
	  return (
		<React.Fragment>
		  <h1>Я компонент, BigApp</h1>
		  <p className='red'>Компоненты можно вкладывать друг в друга.</p>
		  <App/>
		  <News/>
		</React.Fragment>
	  )
	}
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React pls
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
export default App;
