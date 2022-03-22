import './App.css';
import InputForm from './components/InputForm';
import AppContext from './contexts/AppContext';

function App() {
   return (
      <div className='App'>
         <AppContext>
            <InputForm />
         </AppContext>
      </div>
   );
}

export default App;
