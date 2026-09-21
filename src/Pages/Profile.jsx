import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
import Footer from "../Components/Footer";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function logout() {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  function updateProfile(e) {
    e.preventDefault();

    if (!name || !email) {
      alert("Name and email are required");
      return;
    }

    const updatedUser = {
      ...user,
      name: name,
      email: email,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile updated successfully!");

    setIsEditing(false);

    // Refresh the page so the updated user appears
    window.location.reload();
  }

  function changePassword(e) {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      alert("Please enter the password");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const updatedUser = {
      ...user,
      password: newPassword,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Password changed successfully!");

    setNewPassword("");
    setConfirmPassword("");
    setIsChangingPassword(false);
  }

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Please Login First</h2>

          <button onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="profile-page">

        <div className="profile-card">

          {/* Profile Image */}
          <div className="profile-image">
            👤
          </div>

          {/* User Details */}
          <h1>{user.name}</h1>
          <p className="profile-email">{user.email}</p>

          {/* Information */}
          <div className="profile-info">

            <div className="info-row">
              <span>Name</span>
              <strong>{user.name}</strong>
            </div>

            <div className="info-row">
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>

          </div>

          {/* Profile Actions */}
          <div className="profile-actions">

            <button onClick={() => navigate("/orders")}>
              📦 My Orders
            </button>

            <button onClick={() => navigate("/cart")}>
              🛒 My Cart
            </button>

            <button onClick={() => setIsEditing(true)}>
              ✏️ Edit Profile
            </button>

            <button onClick={() => setIsChangingPassword(true)}>
              🔑 Forgot / Change Password
            </button>

            <button
              className="logout-button"
              onClick={logout}
            >
              🚪 Logout
            </button>

          </div>

          {/* Edit Profile */}
          {isEditing && (
            <form
              className="profile-form"
              onSubmit={updateProfile}
            >

              <h2>Edit Profile</h2>

              <label>Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="form-buttons">

                <button type="submit">
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>

              </div>

            </form>
          )}

          {/* Change Password */}
          {isChangingPassword && (
            <form
              className="profile-form"
              onSubmit={changePassword}
            >

              <h2>Change Password</h2>

              <label>New Password</label>

              <input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(e.target.value)
                }
                placeholder="Enter new password"
              />

              <label>Confirm Password</label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Confirm new password"
              />

              <div className="form-buttons">

                <button type="submit">
                  Change Password
                </button>

                <button
                  type="button"
                  onClick={() => setIsChangingPassword(false)}
                >
                  Cancel
                </button>

              </div>

            </form>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Profile;