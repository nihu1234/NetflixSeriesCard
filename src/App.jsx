//import Components, { Header, Footer } from './Components/Components.jsx'; 
import './App.css';

import Components from './Components/Components';
import './Components/Components.css';
//import { Eventhandling } from './Components/Eventhandling';
//import { Eventprops } from './Components/Eventprops';
import "./Components/EV.css";
//import { DerivedState } from './Components/Hooks/DerivedState';
//import { EventPropogation } from './Components/EventPorpogation';
//import { State } from './Components/Hooks/state';



function App() {
  return(
    <section className= "container">
      < h1 className="card-heading">List of best netflix series</h1>
   
    <Components />;
    { /*<Eventhandling/>*/}
    { /* <Eventprops/>; */}
    { /*<EventPropogation/>*/}
    {/*<State/>*/}
    {/*<DerivedState/>*/}
  

   </section>
  );
      
      
    

};

export default App;
