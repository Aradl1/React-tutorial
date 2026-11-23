function UserGreeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, {username}!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}
    </div>
  );
}

export default UserGreeting;