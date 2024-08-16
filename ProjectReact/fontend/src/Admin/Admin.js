import React, { useState, useEffect } from "react";
import "./Admin.css";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3030/admin/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3030/admin/users/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.ok) {
          setUsers(users.filter((user) => user.id !== id));
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Admin Dashboard</h1>
        </header>
        <section className="cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>
        </section>
        <section className="user-list">
          <h3>Registered Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="user-item">
                <div className="user-info">
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Gender:</strong> {user.gender}
                  </p>
                  <p>
                    <strong>Age:</strong> {user.age}
                  </p>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
                <div className="user-image-container">
                  <img
                    src={`http://localhost:3030/uploads/${user.file}`}
                    alt={user.name}
                    className="user-image"
                    onClick={() =>
                      handleImageClick(
                        `http://localhost:3030/uploads/${user.file}`
                      )
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {selectedImage && (
        <div className="image-popup" onClick={closePopup}>
          <img src={selectedImage} alt="Popup" />
        </div>
      )}
    </div>
  );
};

export default Admin;
