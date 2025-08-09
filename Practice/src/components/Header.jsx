import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>🌐 MySite</h1>
        <nav style={styles.nav}>
          <NavLink to="/" style={styles.link} activeStyle={styles.active}>Home</NavLink>
          <NavLink to="/about" style={styles.link} activeStyle={styles.active}>About</NavLink>
          <NavLink to="/services" style={styles.link} activeStyle={styles.active}>Services</NavLink>
          <NavLink to="/contact" style={styles.link} activeStyle={styles.active}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#1e1e2f",
    padding: "15px 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  active: {
    color: "#ffffff",
    borderBottom: "2px solid #61dafb",
    paddingBottom: "4px"
  }
};

export default Header;
