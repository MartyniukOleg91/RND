const user = {
  name: "Mango",
  age: 28,
  city: "Lviv",
};

console.log(JSON.stringify(user));

console.log(localStorage);

localStorage.setItem("oleh",JSON.stringify(user))