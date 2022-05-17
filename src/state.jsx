const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.ru",
  id: "1",
  about:
    "Генерация рыбатекста происходит довольно просто: есть несколько фиксированных наборов фраз и словочетаний, из которых в опредёленном порядке формируются предложения. Предложения складываются в абзацы – и вы наслаждетесь очередным бредошедевром.",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR3hMw_3daUL3Uhr5Y3uJh_kMaYzyqQhhPA&usqp=CAU",
};

// const users = {
//   0: { name: "Ипатий", lastname: "Ельцин", id: 4 },
//   1: { name: "Валерия", lastname: "Ялбачевa", id: 6 },
//   2: { name: "Ксения", lastname: "Тетеринa", id: 8 },
//   3: { name: "Нина", lastname: "Ельцинa", id: 12 },
//   4: { name: "Владислава", lastname: "Енютинa", id: 15 },
//   5: { name: "Юлия", lastname: "Юлбачевa", id: 3 },
//   6: { name: "Петр", lastname: "Праздников", id: 5 },
//   7: { name: "Владислав", lastname: "Вольпов", id: 2 },
//   8: { name: "Константин", lastname: "Вольпов", id: 18 },
//   9: { name: "Нина", lastname: "Тетеринa", id: 13 },
//   10: { name: "Владислав", lastname: "Яблочков", id: 10 },
// };
let users = {};
export function getUser(userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}
export async function getUsers() {
  let response = await fetch("https://soo.p-host.in/getUsers");
  let users = await response.json();
  // console.log(users);
  return users;
}
