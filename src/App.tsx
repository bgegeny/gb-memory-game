import "./assets/scss/global.scss";
import GameTable from "./components/GameTable";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <GameTable
        rows={4}
        columns={4}
        onCardClick={(card) => console.log(card)}
        cards={[]}
      />
    </div>
  );
}

export default App;
