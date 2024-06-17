import AppBar from "../AppBar/AppBar";
import officers from "../../officers.json";
import OfficerList from '../OfficerList/OfficerList';


export default function App() {
  return (
    <div>
      <AppBar />
      <OfficerList items={officers} />
      
    </div>
  );
}

// const App = () => {
//   return <p>Hello React</p>
// };
// export default App;
