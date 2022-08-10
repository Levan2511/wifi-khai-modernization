import React from 'react';
import { Navigate } from 'react-router-dom';

function MissingRoute() {
 return <Navigate to={{pathname: '/en'}}></Navigate>
}

export { MissingRoute }