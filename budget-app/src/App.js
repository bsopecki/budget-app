import { useState } from 'react'
import BudgetPage from './pages/BudgetPage'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
  const [user, setUser] = useState([])
  const [loggedUser, setLoggedUser] = useState(user)
  console.log(user)

  const setNewUser = (newUser) => {
    const setedUser = { ...newUser }
    setUser([...user, setedUser])
    console.log(setedUser)
  }

  const checkUser = (user) => {
    const userHandler = { ...user }
    setLoggedUser({ ...loggedUser, userHandler })

  }

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={() => <Register onAdd={setNewUser} />} />
          <Route path='/budget' component={() => <BudgetPage />} />
          <Route path='/login' component={() => <Login loginHandler={checkUser} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
