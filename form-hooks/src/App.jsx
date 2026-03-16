// import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", { required:{
          value: true, message: "Username is required"}
         })}
        type="text"
        placeholder="username"
      />
      <input
        {...register("email", { required:{
          value: true, message: "Email is required"}
         })}
        type="text"
        placeholder="email"
      />
      <input
        {...register("password", { required:{
          value: true, message: "Password is required"}
         })}
        type="password"
        placeholder="password"
        name="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}