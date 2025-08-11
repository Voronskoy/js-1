const phone = {
  brand: "oppo",
  model: "r8",
  price: 230,
  getDetails() {
    return `${this.brand} ${this.model}
    costs $${This.price} color:$${This.color}`;
  },
};

console.log(phone);
console.log(phone.getDetails());

phone.color = 'red';
console.log(phone.getDetails());




const country = {
  name: 'Ukraine',
  capital: 'Kyiv',
  area: 608628,
  population:40000000,
  getDestination(){
    return this.population / this.area;
  },
  getDescribe(){
    return `the ${this.capital} is the capital of ${this.name}`;
  },
};
console.log(country.getDescribe());
console.log(country.getDestination());






