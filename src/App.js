
import './App.css';
import Car from './components/car';

import Apple from './components/Apple';

function App() {

  const isDoorOpened=false;
  
  const carInfo={brand:"BMW",color:"Black"}
  //const carInfo={}

  const showcarInfo=carInfo.brand!==undefined && carInfo.color!==undefined ;

  const appleInfo={type:"Fuji",color:"Red"}


  return (
    <>
   <p>Hello Melvin Thomas.</p>
   <p>Good Morning NEW YORKERR......</p>



{showcarInfo ? <Car carInfo={carInfo}/>    : null}


{isDoorOpened?<h2>Car door is Opened</h2>:<h2>Car door is closed</h2>}
   
   <Apple appleInfo={appleInfo}/>



   </>
  );
}


export default App;
