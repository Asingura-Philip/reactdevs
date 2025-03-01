import logo from './logo.svg';
import './App.css';
import Message from './message.jsx';

function App() {
 
  const data = "words"
  return (
    <>
      <Message data={data}/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </>
  
  );
}

export default App;
