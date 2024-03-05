import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { register } from 'swiper/element/bundle'
import { Provider } from 'react-redux'
import Ombor from './Ombor.js'

register();

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={Ombor}><App/></Provider>

)
