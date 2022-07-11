import './App.css';
import Options from './components/Options';
import Status from './components/Status';
import { StatusProvider } from './contexts/StatusProvider';

function App() {
  return (
    <div className="App">
      <StatusProvider>
        < Status />
        <div className="quest-info">quest info</div>
        < Options />
      </StatusProvider>
    </div>
  );
}

export default App;
