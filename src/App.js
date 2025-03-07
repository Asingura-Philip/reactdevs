import "./App.css";
// import Message from "./message.jsx";
// import Greet from "./greeting.js";
// import Button from "./button.js";
// import Card from "./Card.js";
// import Userlist from "./userList.js";
import Profilecard from "./ProfileCard.jsx";
import Click from "./button.jsx";
import myComponent from './counter.jsx'

function App() {
  // const data = "words";
  // const name = "Louise"
  // const names = ["john ", "james ", "andrew ", "peter "];

  return (
    <>
      <Click/>
      <Profilecard name={"Asingura Philip"} age={24} />

      {/* <Message data={data} />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Greet name1={"Louise"} />
      <Greet name1={"Logan"} />
      <Button />
      <Button />
      <Button />

      <Card title={"Harry Potter"} description={"Magical school"} />
      <Card title={"Hobit"} description={"Magical world"} />
      <Card title={"Lord of the Rings"} description={"Dragons"} />

      <Userlist names={names} /> */}
      {/* <Profilecard>
        <div>
          <h1>name={"jokino"}</h1>
        </div>
      </Profilecard>
      <Profilecard name={"Warren"} age={25} profilePicture={null} />
      <Profilecard name={"Jackson"} age={30} profilePicture={null} /> */}
    </>
  );
}

export default App;
