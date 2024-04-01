import LoginForm from '../components/LoginForm'
import { Provider } from 'react-redux'
import store from "../services/store/store"

const LoginPage = () => {
  return (
    <div data-testid="loginPage">
      <Provider store={store}>
      <LoginForm/>
      </Provider>
      
    </div>
  )
}

export default LoginPage