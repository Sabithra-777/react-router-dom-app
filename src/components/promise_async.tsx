// components/promise_aync.tsx

import { useState, useEffect } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

function PromiseAsync() {
  const [users, setUsers] = useState<User[]>([]);

  // loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // error
  const [error, setError] = useState("");

  // async function
  async function getUsersData() {
    try {
      const response = await fetch("https://dummyjson.com/users");

      const data = await response.json();

      setUsers(data.users);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUsersData();
  }, []);

  if (isLoading) {
    return <h1>Users Data Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.firstName}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default PromiseAsync;