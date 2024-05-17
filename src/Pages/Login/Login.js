import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css"; // Vamos a crear este archivo para estilos

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar tu lógica de autenticación
    if (email === "user@example.com" && password === "password") {
      navigate('/admin');
    } else {
      setError("Email o contraseña invalida");
    }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Acceso Administrador</h2>
        {error && <p className='error'>{error}</p>}
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
