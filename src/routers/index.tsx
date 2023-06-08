import Button from '@mui/material/Button';
import {Routes, Route, Navigate} from 'react-router-dom'
export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/home" element={<Button>teste</Button>}></Route>
            <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
        
    );
}