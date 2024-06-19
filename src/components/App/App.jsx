import AppBar from "../AppBar/AppBar";
import officers from "../../officers.json";
import OfficerList from "../OfficerList/OfficerList";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />
      <h1>~Dream Team~</h1>
      <OfficerList items={officers} />
    </div>
  );
}

// const App = () => {
//   return <p>Hello React</p>
// };
// export default App;
