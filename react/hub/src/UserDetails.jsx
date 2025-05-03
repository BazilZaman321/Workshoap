// Importing the hook to get URL params
import { useParams } from "react-router-dom";
// Importing hooks for state and effect
import { useEffect, useState } from "react";

function UserDetails() {
  // Extracting 'id' from the URL (e.g., /user/5 → id = 5)
  const { id } = useParams();

  // State to store the user's detail
  const [user, setUser] = useState(null);

  // Fetch user details when component mounts or when 'id' changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())       // convert to JSON
      .then((data) => setUser(data));  // store the result in state
  }, [id]); // Dependency: runs again if ID changes

  // Show loading until user data is fetched
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>👤 User Details</h2>
      {/* Display user info */}
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default UserDetails;
