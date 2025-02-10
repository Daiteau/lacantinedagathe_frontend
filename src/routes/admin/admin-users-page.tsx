import React, { useEffect, useState } from 'react'
import { UsersDto } from '../../interfaces/user.interface'
import { laCantineDAgatheApi } from '../../api';
import { useAuth } from '../route-components/AuthProvider';


// cette page permet à l'admin de voir tous les utilisateurs et leur activitée (tout ce qui leur est rattaché)
export default function AdminUsersPage(){
    const { accessToken } = useAuth();
    const [users, setUsers] = useState<UsersDto[]>([])
    //getAllUsers
    const getUsers = async (): Promise<UsersDto[] | undefined> => {
        try{
            const response = await laCantineDAgatheApi.get('/users', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }); // Récupérer la réponse complète
            const results: UsersDto[] = response.data;
            return results;
        }catch(error){
            console.error(error)
        }
    }
    
    useEffect(() => {
        const fetchUsers = async () => {
          const fetchedUsers = await getUsers(); // Appelle la fonction pour obtenir les utilisateurs
          if (fetchedUsers) {
            setUsers(fetchedUsers); // Mets à jour l'état avec les utilisateurs récupérés
          }
        };
        fetchUsers(); // Appelle fetchUsers à l'intérieur de useEffect
      }, []);

    return (
        <div className='flex w-full min-h-[100vh] bg-gray-700'>
            {users && users.length > 0 ? (
                <table className="flex flex-col min-w-full max-h-[30vh] table-fixed">
                    <thead className='flex min-w-full bg-blue-500'>
                        <tr className='flex justify-between min-w-full'>
                            <th className="max-w-1/20 py-2 px-4">N°</th>
                            <th className="max-w-1/20 py-2 px-4">ID</th>
                            <th className="max-w-2/20 py-2 px-4">Date création</th>
                            <th className="max-w-2/20 py-2 px-4">Prénom</th>
                            <th className="max-w-2/20 py-2 px-4">Nom</th>
                            <th className="max-w-3/20 py-2 px-4">Email</th>
                            <th className="max-w-2/20 py-2 px-4">Alias</th>
                            <th className="max-w-2/20 py-2 px-4">Rôle</th>
                            <th className="max-w-3/20 py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='flex flex-col min-w-full'>
                    {users.map((user, index) => (
                        <tr key={index} className={`flex justify-between border-b-2 border-black ${index%2 ? 'bg-gray-400' : 'bg-white' } min-w-full  `}>
                            <td className="max-w-1/20 py-2 px-4 text-center">{index + 1}</td>
                            <td className="max-w-1/20 py-2 px-4 text-center">{user.id}</td>
                            <td className="max-w-2/20 py-2 px-4 text-center">{user.created_at.toString()}</td>
                            <td className="max-w-2/20 py-2 px-4 truncate text-center">{user.first_name}</td>
                            <td className="max-w-2/20 py-2 px-4 truncate text-center">{user.last_name}</td>
                            <td className="max-w-3/20 py-2 px-4 truncate text-center">{user.email}</td>
                            <td className="max-w-2/20 py-2 px-4 truncate text-center">{user.alias}</td>
                            <td className="max-w-2/20 py-2 px-4 text-center">{user.role_id}</td>
                            <td className="max-w-3/20 py-2 px-4 text-center">
                                <button className="text-blue-500 hover:underline">Éditer</button>
                                <button className="text-red-500 hover:underline ml-2">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (<h1>Aucun utilisateur trouvé</h1>)}
        </div>
    )
}