import './App.css'
import store from './store'
import {Provider} from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css'
import HomepageContainer from './Containers/homepageContainer'

const App = () => {
  return (
    <Provider store={store}>
     <HomepageContainer  />    
    </Provider>
  );
}

export default App;