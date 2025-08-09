import React from 'react'
const Contact = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Contact Us</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" rows="5" style={styles.textarea} required></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center"
  },
  title: {
    fontSize: "34px",
    color: "#1e1e2f",
    marginBottom: "30px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "vertical"
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#1e1e2f",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Contact;
