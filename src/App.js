import logo from './logo.svg';
import './App.css';
import Student from './Student'
import react,{useState} from 'react';

function App() {
  const[name,setName]=useState("Amit")
  return (
    <div className="App">
      <h1>Props With Functional Component :)</h1>
      <Student
        name={name}
        email={"amitpandeye120@gmail.com"}
        address={"noida,delhi"}>
      </Student>
      <button onClick={()=>(setName("Pandey"))}>Update Name</button>
      {/* <Student name={name}
      email={"amitpandey.harmaig@gmai.com"}
      address={"Ghaziabad,Delhi"}>
      </Student>
      <button onClick={()=>(setName("Pandeji"))}>Update Name</button> */}
    </div>
  );
}
function Amit(){
  const[name,setName]=useState("Pandey")
  return(
    <div className="App">
      <Student name={name}
      email={"amitpandey.harmaig@gmai.com"}
      address={"Ghaziabad,Delhi"}>
      </Student>
      <button onClick={()=>(setName("Amit"))}>Update Name</button>
    </div>
  )
}
export default Amit;
