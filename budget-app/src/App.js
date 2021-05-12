import { useState } from 'react'
import BudgetPage from './pages/BudgetPage'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  const [users, setUser] = useState([])
  const [loggedUser, setLoggedUser] = useState([])

  const setNewUser = (newUser) => {
    const setedUser = { ...newUser }
    setUser([...users, setedUser])
    const data = JSON.stringify(users)
    localStorage.setItem('user', data)
  }

  const checkUser = (user) => {
    const userHandler = { ...user }
    setLoggedUser({ ...loggedUser, userHandler })
    const userData = JSON.parse(localStorage.getItem('user'))
    userData.forEach(element => {
      if (element.email === user.userEmail && element.password === user.userPassword) {
        console.log('ok')
      }
    });
  }

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={() => <Login loginHandler={checkUser} />} />
        <Route path='/budget' component={() => <BudgetPage />} />
        <Route path='/register' component={() => <Register onAdd={setNewUser} />} />
      </Switch>
    </Router>
  )
}

export default App;
