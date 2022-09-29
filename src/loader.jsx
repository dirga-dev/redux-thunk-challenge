import React from 'react'

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Fetching Data</span>
        </div>
    </div>
  )
}

export default Loader
