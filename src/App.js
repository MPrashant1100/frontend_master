import './App.css';
import ToDoList from './components/practice_week_one/ToDoList';
import ShoppingList from './components/practice_week_one/ShoppingList';
import HookCounter from './components/practice_week_one/HookCounter'

function App() {
  return (
    <div className="App">
     <ToDoList/>
     <ShoppingList/>
     <HookCounter/>
    </div>
  );
}

export default App;
