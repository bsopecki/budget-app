import { useState } from 'react'
import BudgetPage from './pages/BudgetPage'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
  const [users, setUser] = useState([])
  const [loggedUser, setLoggedUser] = useState(users)


  const setNewUser = (newUser) => {
    const setedUser = { ...newUser }
    setUser([...users, setedUser])
  }

  const checkUser = (user) => {
    const userHandler = { ...user }
    setLoggedUser({ ...loggedUser, userHandler })
    users.forEach(element => {
      if (element.email === user.userEmail && element.password === user.userPassword) {
        console.log('ok')
      }
    });
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={() => <Register loginHandler={setNewUser} />} />
          <Route path='/budget' component={() => <BudgetPage />} />
          <Route path='/login' component={() => <Login onAdd={checkUser} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
