import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

const AppRoutes: React.FC = () => {
    const { toggleTheme } = useAppThemeContext();
    return (
        <Routes>
            <Route path="/" element={<Button variant='contained' color='primary' onClick={ toggleTheme }>Toggle Theme</Button>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;