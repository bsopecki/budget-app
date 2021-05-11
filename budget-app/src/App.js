import { useState } from 'react'
import BudgetPage from './pages/BudgetPage'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  const [users, setUser] = useState([])
  const setNewUser = (newUser) => {
    const setedUser = { ...newUser }
    setUser([...users, setedUser])
    const data = JSON.stringify(users)
    localStorage.setItem('user', data)
  }
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/budget' component={BudgetPage} />
        <Route path='/register' component={() => <Register onAdd={setNewUser} />} />
      </Switch>
    </Router>
  )
}

export default App;
