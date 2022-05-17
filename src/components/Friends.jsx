import { NavLink } from "react-router-dom";
import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.name} {props.lastname}
        </NavLink>
      </td>
    </tr>
  );
};

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userRow: [] };
  }

  componentDidMount() {
    this.props.function().then((users) => {
      let usersCount = users.length;
      let userRow = [];

      for (let i = 0; i < usersCount; i++) {
        userRow.push(
          <TableRow
            index={i}
            key={i}
            name={users[i].name}
            lastname={users[i].lastname}
            id={users[i].id}
          />
        );
      }
      this.setState({ userRow: userRow });
    });
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Фамилия и имя</th>
          </tr>
        </thead>
        <tbody>{this.state.userRow}</tbody>
      </table>
    );
  }
}
export default Friends;
