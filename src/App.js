import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Игра на реакцию</h1>
      <button
        style={{ backgroundColor: color }}
        onClick={handleButtonClick}
      >
        {message}
      </button>
      {reactionTime && (
        <div>
          <p>Время реакции: {reactionTime} мс</p>
        </div>
      )}
      {averageTime !== null && (
        <div>
          <p>Среднее время реакции: {averageTime.toFixed(2)} мс</p>
        </div>
      )}
      <div>
        <button onClick={startGame}>Начать игру</button>
      </div>
    </div>
  );
}

export default App;
