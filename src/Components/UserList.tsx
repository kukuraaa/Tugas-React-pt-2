import { useEffect, useState } from "react";
type User = {
  id: number;
  name: string;
  email: string;
  address: {
  city: string;
  };
};

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        setUsers(data);
        setLoading(false);
      }, 2000); 
    })
    .catch(() => {
      setTimeout(() => {
        setError("Terjadi kesalahan mengambil data");
        setLoading(false);
      }, 2000);
    });
}, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
  <div className="user-list">
    <div className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Cari nama..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <div className="user-container">
      {filteredUsers.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>Email : {user.email}</p>
          <p>Kota : {user.address.city}</p>
          <hr />
        </div>
      ))}
    </div>
  </div>
);
}
export default UserList;