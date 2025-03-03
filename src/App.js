import logo from './logo.svg';
import './App.css';
import Message from './message.jsx';
import Greet from './greeting.js';
import Button from './button.js';

function App() {
 
  const data = "words"
  // const name = "Louise"
  return (
    <>
      <Message data={data}/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Greet name ={"Louise"}/>
      <Greet name ={"Logan"}/>
      <Button/>
      <Button/>
      <Button/>
    </>

  );
}

export default App;
