import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingSpinner = () => {
    let content = (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
    return content
}

export default LoadingSpinner