import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app/App'
import './app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@app/providers/store/store'


const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    </BrowserRouter>
  )
}
