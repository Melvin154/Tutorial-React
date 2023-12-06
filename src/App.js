
import './App.css';
import Day from './components/day';
import Date from './components/date';
import Car from './components/car';

function App() {

  
  const brand="Mercedz Benz"  //Car component props
  const Color="Red"  //car componet props
  const carInfo={brand:"Ferrari",Color:"Black"}


  const dateInfo={month:"December",week:"2"}


  return (
    <>
   <p>Hello Melvin Thomas.<Day/><Date/></p>
   <p>Good Morning NEW YORKERR......</p>
   <Car brand={brand} Color={Color}  carInfo={carInfo}/>    {/* (before <-=)  here we choose any name like brand,carCompany etcc......... */}
   <Date dateInfo={dateInfo}/>
   </>
  );
}


export default App;
