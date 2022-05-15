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

const users = {
  0: { name: "Ипатий", lastname: "Ельцин" },
  1: { name: "Валерия", lastname: "Ялбачевa" },
  2: { name: "Ксения", lastname: "Тетеринa" },
  3: { name: "Нина", lastname: "Ельцинa" },
  4: { name: "Владислава", lastname: "Енютинa" },
  5: { name: "Юлия", lastname: "Юлбачевa" },
  6: { name: "Петр", lastname: "Праздников" },
  7: { name: "Владислав", lastname: "Вольпов" },
  8: { name: "Константин", lastname: "Вольпов" },
  9: { name: "Нина", lastname: "Тетеринa" },
  10: { name: "Владислав", lastname: "Яблочков" },
};

export function getUser() {
  return user;
}
export function getUsers() {
  return users;
}
