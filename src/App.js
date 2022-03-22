import InputForm from './components/InputForm';
import RepoLists from './components/RepoLists';
import AppContext from './contexts/AppContext';

function App() {
   return (
      <section className='App px-2 py-4 bg-slate-200  w-full min-h-screen'>
         <AppContext>
            <InputForm placeholder="Search here"/>
            <RepoLists/>
         </AppContext>
      </section>
   );
}

export default App;
