import { useState } from 'react'
import BudgetPage from './pages/BudgetPage'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



const App = () => {
  const [user, setUser] = useState([
    { id: 1, name: 'John', email: 'example@example.com', password: 'example' }
  ])


  const setNewUser = (newUser) => {
    const setedUser = { ...newUser }
    setUser([...user, setedUser])
  }
  console.log(user)

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/register' exact component={() => <Register onAdd={setNewUser} />} />
          <Route path='/budget' component={() => <BudgetPage />} />
          <Route path='/' component={() => <Login users={user} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
