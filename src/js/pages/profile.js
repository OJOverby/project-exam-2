import { useAuthStore } from "../store/authStore.js";
import { Navigate } from "react-router-dom";

export function Profile() {
  const user = useAuthStore((state) => state.user);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  function handleLogout() {
    clearAuth();
  }

  return (
    <section>
      <h2>My Profile</h2>

      {user.avatar?.url && (
        <img
          src={user.avatar.url}
          alt={user.avatar.alt || `Profile picture`}
          width="150"
        />
      )}

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>


      <button onClick={handleLogout}>Logout</button>
    </section>
  );
}