"use client";

import { useEffect, useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const makeAdmin = async (id) => {
    await fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: "admin",
      }),
    });

    loadUsers();
  };

  const makePremium = async (id) => {
    await fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isPremium: true,
      }),
    });

    loadUsers();
  };

  const removePremium = async (id) => {
    await fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isPremium: false,
      }),
    });

    loadUsers();
  };

  const deleteUser = async (id) => {
    if (!confirm("Delete this user?")) return;

    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    loadUsers();
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Manage Users</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

              <th>Premium</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  {user.role === "admin" ? (
                    <span className="badge badge-error">Admin</span>
                  ) : (
                    <span className="badge">User</span>
                  )}
                </td>

                <td>
                  {user.isPremium ? (
                    <span className="badge badge-warning">⭐ Premium</span>
                  ) : (
                    <span className="badge">Free</span>
                  )}
                </td>

                <td>
                  <div className="flex flex-wrap gap-2">
                    {user.role !== "admin" && (
                      <button
                        onClick={() => makeAdmin(user._id)}
                        className="btn btn-sm btn-primary"
                      >
                        Make Admin
                      </button>
                    )}

                    {!user.isPremium ? (
                      <button
                        onClick={() => makePremium(user._id)}
                        className="btn btn-sm btn-warning"
                      >
                        ⭐ Premium
                      </button>
                    ) : (
                      <button
                        onClick={() => removePremium(user._id)}
                        className="btn btn-sm btn-outline btn-warning"
                      >
                        Remove Premium
                      </button>
                    )}

                    <button
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
