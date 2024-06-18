import logo from './logo.svg';
import './App.css';

function App(password) {
  i = 0;
  if (password.length > 7) {
    i++;
  }
  if (password.length <= 20) {
    i++;
  }
  if (/[A-Z]/.test(password)) {
    i++; 
  }
  if (/[0-9]/.test(password)) {
    i++;
  }
  if (/[a-z]/.test(password)) {
    i++; 
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
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
