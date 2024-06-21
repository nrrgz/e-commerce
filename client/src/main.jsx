import React from 'react'
import "./styles/_reset.scss"
import ReactDOM from 'react-dom/client'
import { router } from "./router/index.jsx"
import { RouterProvider } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
