import "./App.css";
import { Greeting } from "./components/Greeting/Greeting";
import { Message } from "./components/Message/Message";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Greeting name="Dima" />
      <Message text="прівєт ми царєвни і ми уб'ом тібя в трі часа ночі" />
      <Button
        onClick={() => {
          console.log(
            "Вони тут. Тобі не втікти. Час щоб сховатись - 10 сек. Царєвни нікого не щадять."
          );
        }}
      />
    </div>
  );
}

export default App;
