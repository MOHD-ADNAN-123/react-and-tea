import React from 'react'

const About = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>About Us</h2>
      <p style={styles.text}>
        Welcome to <strong>MySite</strong> — a place where creativity meets technology.
        We are a small team of passionate developers learning and building amazing things using modern tools like React, JavaScript, and more.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center"
  },
  title: {
    fontSize: "34px",
    marginBottom: "20px",
    color: "#1e1e2f"
  },
  text: {
    fontSize: "18px",
    color: "#444",
    lineHeight: "1.6"
  }
};

export default About;
