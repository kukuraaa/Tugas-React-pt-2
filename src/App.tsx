import Conditional from "./Components/Conditional";
import ListRendering from "./Components/ListRendering";
import UseEffect from "./Components/UseEffect"
import FormValidasi from "./Components/FormValidasi";
import UserList from "./Components/UserList";
import "./App.css";

function App(){
  return(
    <div>
        <div className="top-section">
        <UseEffect />
        <Conditional />
      </div>
      <ListRendering/>
      <FormValidasi/>
      <UserList/>
    </div>
  )
}
export default App;