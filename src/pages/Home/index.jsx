import logo from "../../logodr.svg"
import Boton  from "../../component/Boton.jsx";
export default function Home (){
    return(
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <Boton />
          
      </header>
    </div>
    );
}