// Importing necessary hooks and components
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersList() {
  // State to store the list of users
  const [users, setUsers] = useState([]);

  // Runs only once when the component is mounted ([]) like componentDidMount
  useEffect(() => {
    // Fetching user data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())      // converting response to JSON
      .then((data) => setUsers(data)); // storing the data in the 'users' state
  }, []);

  return (
    <div>
      <h2>👥 Users List</h2>
      <ul>
        {/* Loop through users and create a list item for each */}
        {users.map((user) => (
          <li key={user.id}>
            {/* Each name is a clickable link to the user details page */}
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
