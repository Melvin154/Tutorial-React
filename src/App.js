
import './App.css';
import Day from './components/day';
import Car from './components/car';

import Apple from './components/Apple';

function App() {

  
  const brand="Mercedz Benz"  //Car component props
  const Color="Red"  //car componet props
  const carInfo={brand:"Ferrari",Color:"Black"}



  const appleInfo={type:"Fuji",color:"Red"}


  return (
    <>
   <p>Hello Melvin Thomas.<Day/></p>
   <p>Good Morning NEW YORKERR......</p>
   <Car brand={brand} Color={Color}  carInfo={carInfo}/>    {/* (before <-=)  here we choose any name like brand,carCompany etcc......... */}
   {/* <Date dateInfo={dateInfo}/> */}
   <Apple appleInfo={appleInfo}/>
   </>
  );
}


export default App;
