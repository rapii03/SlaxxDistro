import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/users/:userId" component={UserDetails} />
        <div className="flex justify-center bg-slate-100 min-h-screen items-center">
        </div>
      </Switch>
    </Router>

  )
}

export default App
