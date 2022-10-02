import './App.css';
import Options from './components/Options';
import Status from './components/Status';
import QuestInfo from './components/QuestInfo';
import { StatusProvider } from './contexts/StatusProvider';
import ShortcutList from './components/ShortcutList/Index';

function App() {
  return (
    <div className="App">
      <StatusProvider>
        < Status />
        < QuestInfo />
        < ShortcutList />
        < Options />
      </StatusProvider>
    </div>
  );
}

export default App;