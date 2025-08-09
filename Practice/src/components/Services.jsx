import React from 'react'
const Services = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Our Services</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Web Development</h3>
          <p style={styles.cardText}>
            We build fast, modern websites using React, HTML, CSS, and JavaScript.
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>UI/UX Design</h3>
          <p style={styles.cardText}>
            Our designs are sleek, intuitive, and user-friendly for every screen size.
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Learning Projects</h3>
          <p style={styles.cardText}>
            We create demo apps to practice routing, APIs, layouts, and much more.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center"
  },
  title: {
    fontSize: "34px",
    marginBottom: "30px",
    color: "#1e1e2f"
  },
  grid: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
    width: "300px",
    transition: "transform 0.3s ease-in-out"
  },
  cardTitle: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "10px"
  },
  cardText: {
    fontSize: "16px",
    color: "#666"
  }
};

export default Services;
