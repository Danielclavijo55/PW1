import React, { useState } from 'react';
import robotBanner from '../assets/robot-banner.png';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        login: username,
        password: password
      });
      if (response.data.status === 'success') {
        onLogin(); 
      }
    } catch (err) {
      setError('Error de autenticación. Revise sus credenciales');
      console.error('Error de autenticación:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center font-roboto text-black">
        Adopta un Robot con Robot Lovers!
      </h1>
      <div className="mb-6 flex justify-center">
        <img src={robotBanner} alt="Robot Lovers Banner" className="w-full max-w-md rounded-lg" />
      </div>
      <h2 className="text-xl font-semibold mb-4 text-center font-roboto">Inicio de sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 font-roboto">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-roboto"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-roboto">Contraseña</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-roboto"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded font-roboto">
            {error}
          </div>
        )}
        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-roboto"
          >
            Ingresar
          </button>
          <button
            type="button"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 font-roboto"
          >
            Cancelar
          </button>
        </div>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600 font-inter">
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </p>
    </div>
  );
};

export default LoginForm;