//1
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby ='skydiving';
user.premium = 'false';
const keys = Object.keys(user);
for (const key of keys) {
  console.log(key, user[key]);
}

//2
const countProps = function(obj) {
  return Object.keys(obj).length
};
console.log(countProps({ name: 'Mango', age:2}));

//3
const findBestEmployee = function(employees) {
let bestEmployee;
let max=0;
for (const employee in employees) {
  const task = employees[employee];
  if ( task > max) {
    max = task
    bestEmployee = employee
  }
}
return bestEmployee;
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }))

//4
const countTotalSalary = function(employees) {
  const values = Object.values(employees)
  let total =0;
  for (const value of values) {
    total += value
  }
  return total;
};

//5

const getAllPropValues = function(arr, prop) {
  const values = [];

  for (const item of arr) {
    let value = item[prop];

    if (value !== undefined) {
      values.push(value);
    }
  }

  return values;
}
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

//6
const calculateTotalPrice = function(allProdcuts6, productName) {
  let total = 0;
  for (item of allProdcuts6) {
    let name = item.name;

    if (productName === name) {
      total = item.price * item.quantity;
    }

  }
  return total
};
const products6 = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
console.log(calculateTotalPrice(products6, 'Радар'));

//7 not completed
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {},
  deposit(amount) {},
  withdraw(amount) {},
  getBalance() {},
  getTransactionDetails(id) {},
  getTransactionTotal(type) {},
};