import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
        <div className='wrapper'>
                  <Route path='/home' component = {()=><p>Hello Home</p>} />
        </div>
    </Router>
  );
}

export default App;
