import React from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";

export default function PrivateRoute({
    isAuthenticated,
    component: Component,
    ...rest
}){
    return (
        <Route
            {...rest}
            render={(routeProps) => 
                isAuthenticated ? (
                    <Component {...routeProps}/>
                ) : (
                    <Redirect to={{
                        pathname: `${process.env.PUBLIC_URL}/login`,
                        state: { from: routeProps.location }
                    }} />
                )
            }
        />
    );
}
