import Users from "./components/Users";

function App() {
  const users = [
    { id: 1, name: "Fernando" },
    { id: 2, name: "Ana" },
    { id: 3, name: "Luis" },
  ];

  return <Users data={users} />;
}

export default App;
