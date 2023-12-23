import { useSelector } from 'react-redux';

import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
    return {
        isloggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    };
};
