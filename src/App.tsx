import "./assets/scss/global.scss";
import GameTable from "./components/GameTable";
import Header from "./components/Header/_Header";
import { useInitApp } from "./hooks/useInitApp";

function App() {
  useInitApp();

  return (
    <div className="container">
      <Header />
      <GameTable />
    </div>
  );
}

export default App;
