// Importing the App.css file, which contains styling rules for the application
import "./App.css";

// Importing the ColorList component from the components folder
import ColorList from "./components";

// Defining the App component, which renders the ColorList component inside a container div
function App() {
  return (
    <div className="container">
      <ColorList />
    </div>
  );
}

export default App;
