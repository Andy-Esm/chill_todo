import store from '@app/providers/store/store'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App'
import i18n from './i18n/i18n'
import './app/styles/index.scss'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <StrictMode>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </Provider>
      </StrictMode>
    </BrowserRouter>,
  )
}
