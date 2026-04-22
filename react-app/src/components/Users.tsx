import { useState } from "react";

interface User {
  id: number;
  name: string;
}

interface UsersProps {
  data: User[];
}

function Users(props: UsersProps) {
  const { data } = props;

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <>
      <ul className="list-group">
        {data.map((user) => (
          <li
            className={`list-group-item ${selectedUser?.id === user.id ? "active" : ""}`}
            key={user.id}
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
