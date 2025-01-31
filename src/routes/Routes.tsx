import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

const AppRoutes: React.FC = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/home',
                label: 'Home',
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default AppRoutes;