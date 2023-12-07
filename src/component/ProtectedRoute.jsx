import { Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';


const ProtectedRoute = ({element}) => {
    const isLoggedIn = useSelector(state => state.login); // Check the login status from Redux
    return isLoggedIn ? element : <Navigate to="/" />;
};

export default ProtectedRoute;