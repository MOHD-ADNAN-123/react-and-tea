import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
        <p style={styles.credit}>Made with ❤️ by You</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f8f9fa",
    padding: "20px 0",
    marginTop: "auto",
    borderTop: "1px solid #ddd",
    boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
    color: "#444",
    fontSize: "14px",
  },
  credit: {
    fontSize: "13px",
    marginTop: "5px",
    color: "#888",
  }
};

export default Footer;
