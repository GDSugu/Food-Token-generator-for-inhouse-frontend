import React from "react"
import {createRoot} from 'react-dom/client';
import App from "./App"


const training = document.getElementById("training");
const root = createRoot(training);
root.render(<App/>);



