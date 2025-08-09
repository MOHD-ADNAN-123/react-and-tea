import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [color,setcolor]=useState("purple")
  return (

    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to MySite</h1>
        <p style={styles.subheading}>
          We provide awesome services to boost your online presence.
        </p>
        <div style={styles.buttonGroup}>
          <Link to="/services" style={styles.button}>
            Our Services
          </Link>
          <Link to="/contact" style={{ ...styles.button, backgroundColor: "#444" }}>
            Contact Us
          </Link>
          <br/>
          <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className ="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button  className="text-black-600" onClick ={()=> setcolor("red")}>Red</button> 
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Black")}>Black</button>
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Blue")}>Blue</button>
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Green")}>Green</button>
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Brown")}>Brown</button>
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Yellow")}>yellow</button>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>

  );
};

const styles = {
  container: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  content: {
    maxWidth: "700px",
  },
  heading: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "20px",
    marginBottom: "40px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#00b894",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};

export default Home;
