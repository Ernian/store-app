import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/app/App'
import './index.css'
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);