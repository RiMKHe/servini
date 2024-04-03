


export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key":" 50ab7cea68msh4139c5d1b330707p15071djsne64a573d1c20 ",
    "X-RapidAPI-Host": 'cars-by-api-ninjas.p.rapidapi.com',
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
  {
    headers: headers,
  });


  
  const result = await response.json();
  return result;
};
