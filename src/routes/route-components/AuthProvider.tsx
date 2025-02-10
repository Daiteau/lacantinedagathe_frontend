import React, { createContext, useContext, useState, ReactNode } from 'react';
import { laCantineDAgatheApi } from '../../api';
import { jwtDecode } from "jwt-decode";


interface AuthContextType {
  isSignedIn: boolean;
  accessToken: string | null;
  decodedAccessToken: any;
  signIn: (accessToken: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [decodedAccessToken, setDecodedAccessToken] = useState<any>(null);

  const signIn = (newAccessToken: string) => {
    setAccessToken(newAccessToken);
    setIsSignedIn(true);
    setDecodedAccessToken(jwtDecode(newAccessToken));
  };

  const signOut = async () => {
    try {
      await laCantineDAgatheApi.post('/auth/logout', {
        token: accessToken,
      });
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setIsSignedIn(false);
      setAccessToken(null);
      console.log("SignOut redirected to login page");
    }
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, accessToken, decodedAccessToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};