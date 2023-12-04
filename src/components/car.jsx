import React from 'react'

const Car = (props) => {

const{brand,Color,carInfo}=props;

    const msg=`Hi, I'm a ${brand} model new car and my color is ${Color}. `
    const carDetails= `My latest Car  is ${carInfo.brand} and it's color is ${carInfo.Color} `
  return (
    <>
    <h2>{msg}</h2>
    <h2>{carDetails}</h2>
    </>
  )
}

export default Car;