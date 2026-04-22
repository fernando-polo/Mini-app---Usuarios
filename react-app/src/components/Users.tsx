import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers([
        { id: 1, name: "Fernando" },
        { id: 2, name: "Ana" },
        { id: 3, name: "Luis" },
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className={`list-group-item ${
              selectedUser?.id === user.id ? "active" : ""
            }`}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>

      <p>
        Usuario seleccionado: {selectedUser ? selectedUser.name : "Ninguno"}
      </p>
    </>
  );
}

export default Users;
