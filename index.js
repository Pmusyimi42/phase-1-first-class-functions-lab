// Code your solution in this 
const arrayz = ['tom', 'cheese', 'kinyui', 'mlango']
const returnFirstTwoDrivers = (array)=>{
  return array.slice(0,2)
};
const returnLastTwoDrivers = (array)=>{
  return array.slice(-2)
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// const newFare = (fare) => {
//   fare = fare*multiplier
//   return fare;
//
const createFareMultiplier = multiplier => {
  return (function(fare){
    fare = multiplier * fare;
    return fare;
  })
};
// console.log(createFareMultiplier(4))


const fareDoubler = (fare) =>{ 
  let doubleFare = createFareMultiplier(2)(fare)
  return doubleFare;
}
const fareTripler = (fare) =>{
  let tripleFare = createFareMultiplier(3)(fare)
  return tripleFare;
};
const selectDifferentDrivers = (arrayOfDrivers, fnction) =>{
  if (fnction === returnFirstTwoDrivers){
    return fnction(arrayOfDrivers)
    // console.log(arrayOfDrivers);
    // return returnFirstTwoDrivers(arrayOfDrivers);
  }
  else if ( fnction === returnLastTwoDrivers){
    return fnction(arrayOfDrivers)
  }
};
// console.log(selectDifferentDrivers(arrayz, returnLastTwoDrivers));
