import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>  
    <App />
  </RecoilRoot>
)
