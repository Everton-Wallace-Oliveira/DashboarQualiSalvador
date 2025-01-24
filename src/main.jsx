/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import App from './App'
import './styles/index.css'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const theme = createTheme({
	components: {
		MuiPopover: {
			defaultProps: {
				container: rootElement,
			},
		},
		MuiPopper: {
			defaultProps: {
				container: rootElement,
			},
		},
		MuiDialog: {
			defaultProps: {
				container: rootElement,
			},
		},
		MuiModal: {
			defaultProps: {
				container: rootElement,
			},
		},
	},
})

root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
        {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> */}
    </React.StrictMode>,
);
