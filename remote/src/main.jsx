import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthProvider from '../../host/src/contexts/AuthProvider/index.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </RecoilRoot>
)
