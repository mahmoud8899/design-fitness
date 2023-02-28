import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './css/index.css'

const root = ReactDOM.createRoot(
    document.getElementById('fitness') as HTMLElement
);
root.render(<App />);