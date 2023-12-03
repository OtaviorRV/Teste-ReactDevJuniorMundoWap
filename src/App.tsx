
import "./App.css";
import Home from "./pages/Home";
import TaskProvider from "./providers/TaskProvider";



const App = () => {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
};

export default App;
