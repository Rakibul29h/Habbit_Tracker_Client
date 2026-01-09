import React from 'react';
import Container from '../../Components/Shared/Container/Container';
import { ChevronLeft, User } from 'lucide-react';
import UseAuth from '../../Hook/UseAuth';

const Profile = () => {
    const {user}=UseAuth();
    return (
        <Container>
             <div className="animate-fade-in flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
      <div className={`p-10 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full transition-colors dark:bg-gray-800 dark:text-white bg-white text-gray-900`}>
        <div className="relative mb-6">
            <img 
                src={user.photoURL} 
                alt={user.displayName} 
                className="w-32 h-32 rounded-full object-cover border-4 border-teal-500 shadow-md"
            />
            <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center">{user.displayName}</h1>
        <p className="opacity-70 text-sm mb-6 flex items-center gap-2">
            <User size={16} /> {user.email}
        </p>
      </div>
   
    </div>
        </Container>
    );
};

export default Profile;