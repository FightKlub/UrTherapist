// import { Navigate, Outlet, Route } from 'react-router-dom';
// import {useAuthValue} from './AuthContext'

// export default function PrivateRoute({component:Component, ...rest}) {
//   const {currentUser} = useAuthValue()

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser?.emailVerified ? <Outlet /> : <Navigate to='/login' />
//     }}>
//     </Route>
//   )
// }

import { Navigate, Outlet } from 'react-router-dom';
import { useAuthValue } from './AuthContext';

export default function PrivateRoute() {
  const { currentUser } = useAuthValue();

  return currentUser?.emailVerified ? <Outlet /> : <Navigate to="/" />;
}

