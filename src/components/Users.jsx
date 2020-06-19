import React, { useState, useEffect } from 'react';
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = (await Axios('http://jsonplaceholder.typicode.com/users')).data;
      if (data.length > 0) {
        setUsers(data);
      }
    })();
  });

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

export default Users;