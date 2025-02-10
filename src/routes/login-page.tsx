import React, { useState } from 'react';
import { laCantineDAgatheApi } from '../api';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../routes/route-components/AuthProvider';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (event) => {
    setErrorMessage('');

    event.preventDefault();
    try {
      const response = await laCantineDAgatheApi.post('/auth/login', { email, password });
      // Après avoir reçu les jetons du backend

      if (response.status === 200) {
        console.log("response :", response.status);
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;

        // Utiliser signIn pour stocker les jetons et mettre à jour l'état d'authentification
        signIn(accessToken);
        navigate('/welcome');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Erreur lors de la connexion. Veuillez vérifier vos identifiants.');
    }
  };

  return (
    <div className='flex justify-center items-center w-full min-h-[100vh] bg-gray-500'>
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
            autoComplete= "email"
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
            autoComplete="current-password"
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
        <Link to="/signup" className="hover:underline">Vous n'avez pas de compte ?</Link>
      </form>
    </div>
  );
};