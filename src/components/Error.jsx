import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error () {
    const error = useRouteError();
    return(
        <div>
            <h1>404 Oops Page Not Found</h1>
            <h2>Status: {error.status}</h2>
            <h2>{error.statusText}</h2>
        </div>
    )
}

export default Error