const users = [
  {
    id: 1,
    name: "Roberto",
    address: "Av Corrientes 4585",
  },
  {
    id: 2,
    name: "Natalia",
    address: "Av La Plata 1542",
  },
  {
    id: 3,
    name: "Ernesto",
    address: "Encalada 482",
  },
];

// const getUsers = () => users;
// console.log(getUsers());

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
      reject(new Error("whoops"));
    }, Math.round(Math.random() * (3000 - 500)) + 500);
  });
};
// console.log(getUsers())
// getUsers()
//   .then((users) => console.log(users))
//   .catch((err) => console.log(err));

const getList = async () => {
  try {
    const usersArray = await getUsers();
    console.log(usersArray);
  } catch (error) {
    console.log(error);
  }
};
getList();
