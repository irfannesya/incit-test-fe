import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mengambil data pengguna dari backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users'); // Ganti dengan endpoint yang sesuai
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Registered At</th>
            <th>Login Count</th>
            <th>Last Logout</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.registeredAt}</td>
              <td>{user.loginCount}</td>
              <td>{user.lastLogout}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
