import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { laCantineDAgatheApi } from '../api';
import { SignUpUserDto } from '../interfaces/user.interface'

export default function SignUpPage() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [alias, setAlias] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      setErrorMessage('');
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
  
      // Vous pouvez ajouter ici votre logique pour envoyer les données à l'API
      // Supposons que vous envoyez les données à votre API ici :
      try {
        const user: SignUpUserDto = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            alias: alias
        }
        // Exemple d'appel à une API pour l'authentification
        const response = await laCantineDAgatheApi.post('/auth/signup', { 
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            alias: user.alias
        });
        
        // Si l'authentification réussit, vous redirigez l'utilisateur
        if (response.status === 200) {
          console.log("response :",response.status)
          console.log("Bravo vous êtes connecté !")
        //   navigate('/auth/signup'); // Redirection vers la page de connexion
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrorMessage(error)
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    };
  
    return (
      <div className='flex justify-center items-center w-full min-h-[100vh] bg-gray-500'>    
        <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto space-y-4 border-2 border-white p-4">
          <h2 className="text-2xl font-bold text-center">Connexion</h2>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Entrez votre prénom"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Entrez votre nom"
            />
          </div>
          <div>
            <label htmlFor="alias" className="block text-sm font-medium text-gray-700">
              Alias
            </label>
            <input
              type="text"
              id="alias"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Entrez votre alias (optionnel)"
            />
          </div>
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
            <p className="text-red">{JSON.stringify(errorMessage)}</p>
          )}
          <Link to="/auth/login" className="hover:underline">Vous avez déjà un compte ? Connectez vous !</Link>
        </form>
      </div>
    )
} 