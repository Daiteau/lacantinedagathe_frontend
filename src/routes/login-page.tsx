import React, { useState } from 'react';
import { laCantineDAgatheApi } from '../api';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
  setErrorMessage('')

    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Vous pouvez ajouter ici votre logique pour envoyer les données à l'API
    // Supposons que vous envoyez les données à votre API ici :
    try {
      // Exemple d'appel à une API pour l'authentification
      const response = await laCantineDAgatheApi.post('/auth/login', { email, password });
      
      // Si l'authentification réussit, vous redirigez l'utilisateur
      if (response.status === 200) {
        console.log("response :",response.status)
        // navigate('/auth/login'); // Redirection vers la page de connexion
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage(error)
      // Vous pouvez afficher un message d'erreur à l'utilisateur ici
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-[100vh] bg-gray-500'>    
      <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto space-y-4 border-2 border-white p-4">
        <h2 className="text-2xl font-bold text-center">Connexion</h2>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez votre email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Se connecter
        </button>
        {errorMessage && (
          <p className="text-red">{errorMessage}</p>
        )}
        <Link to="/auth/signup" className="hover:underline">Vous n'avez pas de compte ?</Link>
      </form>
      
    </div>
  );
};