
import './App.css';
import { Provider } from 'react-redux'
import store from './Components/redux/store';
import Quizz from './Components/Quizz';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Quizz />
      </div>
    </Provider>
  );
}

export default App;
