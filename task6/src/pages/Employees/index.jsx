import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserList = styled.ul`
  list-style: none;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const User = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0 20px;
  border-bottom: 1px solid #555;
  max-width: 50%;
  button {
    cursor: pointer;
  }
`;

const AddUser = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #555;
  button {
    cursor: pointer;
  }
`;

export default function Employees() {
  const [userList, setUserList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        return response.json();
      })
      .then(({ total, data }) => {
        setCounter(total);
        setUserList(data);
      });
  }, []);

  const addUser = () => {
    const id = counter + 1;
    setCounter(id);
    setUserList([...userList, { id, first_name: firstName }]);
  };

  const removeUser = (userId) => {
    setUserList(userList.filter(({ id }) => id !== userId));
  };

  return (
    <>
      <h1>Employees page</h1>
      <AddUser>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <button onClick={addUser}>Add</button>
      </AddUser>
      <UserList>
        {userList.map(({ id, first_name }) => (
          <User key={id}>
            <span>{first_name}</span>
            <button onClick={() => removeUser(id)}>remove</button>
          </User>
        ))}
      </UserList>
    </>
  );
}
