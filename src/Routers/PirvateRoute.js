import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PirvateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
   
    localStorage.setItem('lasPath', rest.location.pathname)
    return (
        <Route {...rest}
            component={(props)=>(

                (isAuthenticated)
                    ?(<Component {...props}/>)
                    :(<Redirect to="/login"/>)

            )}
        />
    )
}

PirvateRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}