
import './App.css';
import Car from './components/car';

import Apple from './components/Apple';

function App() {

  
  const carInfo={brand:"Ferrari",color:"Red"}



  const appleInfo={type:"Fuji",color:"Red"}


  return (
    <>
   <p>Hello Melvin Thomas.</p>
   <p>Good Morning NEW YORKERR......</p>



{carInfo.brand!==undefined && carInfo.color!==undefined ? <Car carInfo={carInfo}/>    :null}



   
   <Apple appleInfo={appleInfo}/>



   </>
  );
}


export default App;
