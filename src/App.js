import logo from './logo.svg';
import './App.css';
import Message from './message.jsx';
import Greet from './greeting.js';
import Button from './button.js';
import Card from './Card.js';
import Userlist from './userList.js'

function App() {
 
  const data = "words"
  // const name = "Louise"
  const names = ['john ','james ','andrew ','peter ']
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


      <Card title={"Harry Potter"} description={"Magical school"}/>
      <Card title={"Hobit"} description={"Magical world"}/>
      <Card title={"Lord of the Rings"} description={"Dragons"}/>


      <Userlist names={names}/>
    </>

  );
}

export default App;
