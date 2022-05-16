import styles from "./Profile.module.css";
const h3Style = {
  color: "blue",
  fontSize: 15,
};
const Profile = (props) => {
  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);
  //console.log(userId);
  return (
    <div className="row">
      <div className="col-sm-4">
        <img src={user.avatar} />
      </div>
      <div className="col-sm-8">
        <h2 style={{ color: "red" }}>
          ID: {user.id} {user.name} {user.lastname}
        </h2>
        <h3 style={h3Style}>Обо мне</h3>
        <p className={styles.about}>{user.about}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
