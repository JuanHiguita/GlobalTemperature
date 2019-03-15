/*The average between 1951 - 1980 = 13.9333 C
T(t) = T(0)-T(m)e^kt + T(m) --> Newton equation for calculate the temperature in a object
50 C the human body begins to dehydrate
The temperature in the Mesosphere is about the 80C
The temperature in mid of 1990 was 14C(reference point)
The temperature in 2012 (22 years = 11.5632x10^6 minutes later from our reference point) was 14.6C
A year have 525600 minutes
*/
temperature = (year) => {

  t = 11.5632*10**6;
  //K value for the Newton equation
  k = Math.log(65.4/66);
  k = k/t;

  //User input years
  years = year - 1990;
  minutes = years*(525600);

  //Euler Value
  euler = Math.E**(k*(minutes));

  //World temperature in X years
  T = (14 - 80)*euler+80;
  return(Math.round(T*100)/100);
}

document.getElementById("temperatureForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  if(document.getElementById("userYear").value == 0 || isNaN(document.getElementById("userYear").value)){
    alert("Por favor ingresa un valor valido");
  }else{
    document.getElementById("temperature").innerHTML = temperature(document.getElementById("userYear").value) + " ºC";
}
});
