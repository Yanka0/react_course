import {createContext, FunctionComponent, ReactNode, useContext, useState} from 'react';


type Props = {
  children: ReactNode
}
type User = {
  name:string,
  email:string,
}

type AuthContextProps = {
  user: User | null,
  login: (userData: User) => void,
  logout: () => void,
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);
const AuthProvider: FunctionComponent<Props> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
