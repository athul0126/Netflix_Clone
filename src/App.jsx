import "./App.css"
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { originals,action,horror } from "./urls";
const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <Banner/>
      <RowPost urls={originals} title="Netflix Originals"/>
      <RowPost urls={action} title="Action" isSmall/>
      <RowPost urls={horror} title="Horror" isSmall/>
    </div>
  );
}

export default App;
