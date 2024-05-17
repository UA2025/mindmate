import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0)

  return (
   
    <div>

      
    </div>
    
  );
}
const mapStateToProps = (state) => ({
  count: state.count.count
});

export default App

