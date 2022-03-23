import Header from './components/Header';
import InputForm from './components/InputForm';
import RepoLists from './components/RepoLists';
import AppContext from './contexts/AppContext';

function App() {
   return (
      <>
         <Header />
         <section className="App px-4 md:px-16 py-4 bg-slate-200  w-full min-h-screen font-mono">
            <AppContext>
               <InputForm placeholder="Search here" />
               <RepoLists />
            </AppContext>
         </section>
      </>
   );
}

export default App;
