import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Bootstrap
import './styles/scss/styles.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

let container = document.getElementById('root')
if (container) {
    const root = ReactDOM.createRoot(container)

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
