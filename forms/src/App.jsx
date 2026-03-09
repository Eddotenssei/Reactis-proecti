import "./App.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();

    let newError = {};

    if (name.length < 8) {
      newError.name = "Name should be longer than 8 letters";
    }

    if(!email.includes("@")){
      newError.email = "email should include @"
    }

    if (age < 18) {
      newError.age = "Age must be at least 18";
    }

    if (password.length < 6) {
      newError.password = "Password should be at least 6 characters";
    }

    setError(newError);


      console.log({ name, email, age, password });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Log In</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}

        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}

        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        {error.age && <p style={{ color: "red" }}>{error.age}</p>}

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

