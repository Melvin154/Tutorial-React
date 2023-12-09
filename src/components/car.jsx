import React from 'react'

const Car = (props) => {

const{carInfo}=props;


    const carDetails= `My latest Car  is ${carInfo.brand} and it's color is ${carInfo.color} `
  return (
    <>
    <h2>{carDetails}</h2>
    </>
  )
}

export default Car;