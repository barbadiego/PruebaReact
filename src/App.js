//@ts-check
import './App.css';
import CatsContainer from './components/APIs/CatsContainer';

function App() {
//   let decir = "APP dijo:"

  // function alertHolaMundo(){
  //   alert("Prueba de mensaje");
  // }
let miProd = { id: 0, name: "remera", price: 30 }
let maxStock = 100;

  return (
    <div className="App">
      {/* <Producto miProd={miProd} maxStock={maxStock}/> */}
      {/* <TestPromesasArray /> */}
      <CatsContainer />
      {/* {decir}
      <header className="App-header">

      </header>
      
        <HOC>
          <>
          <Test msg="Hola, soy el hijo 1" />
          <Test msg="Hola, soy el hijo 2" />
          <Test msg="Hola, soy el hijo 3" />
          </> 
        </HOC>
      
      <AlumnoContainer />
      <TestFunction alertHolaMundo={alertHolaMundo}/> */}
      {/* <TestPromesas /> */}
    </div>
  );
}

export default App;
