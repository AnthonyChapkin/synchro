import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <>
      <div>
        <Header headerNum={1}>Syncro</Header>
        <Header headerNum={2}>Username</Header>
        <Header headerNum={2}>Password</Header>
        <Button />
        <Paragraph />
        <Button />
      </div>
    </>
  );
}

export default App;
