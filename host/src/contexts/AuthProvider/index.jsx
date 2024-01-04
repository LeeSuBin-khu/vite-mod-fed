import { createContext, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userState } from '../../store/user';

const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    // const navigate = useNavigate();
    
    const user = useRecoilValue(userState);

    useEffect(() => {
        if (!user) {
            // navigate('/error');
            console.log('check authorization');
        }
    });

    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);