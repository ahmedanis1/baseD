import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import React, { ReactElement, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: Props): ReactElement | null => {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
