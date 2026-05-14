import React from "react";

function App() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    }).then(() => {
      window.location.href =
        "https://resilient-sable-8cb929.netlify.app/?loggedin=true";
    });
  }

  return (
    <div style={page}>
      <form
        name="signup"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        style={form}
      >
        <input type="hidden" name="form-name" value="signup" />

        <h1 style={title}>Signup</h1>

        <input name="name" placeholder="Full Name" required style={input} />
        <input name="phone" placeholder="Phone Number" required style={input} />
        <input name="email" type="email" placeholder="Email" required style={input} />
        <input name="password" type="password" placeholder="Password" required style={input} />

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
