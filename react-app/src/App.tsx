import "./App.css";
import { useThemeStore } from "./stores/useTheme";

function App() {
  const { theme } = useThemeStore();

  return (
    <div data-theme={theme} className="h-screen">
      <h1 className="text-lg">Hello world</h1>
    </div>
  );
}

export default App;
