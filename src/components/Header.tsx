import React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Memory Game</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "20px",
    textAlign: "center" as const,
  },
  title: {
    color: "#61dafb",
    fontSize: "2rem",
    margin: 0,
  },
};

export default Header;
