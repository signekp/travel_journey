import './App.css';
import Header from './components/Header'
import Journeys from './components/Journeys';
import data from './data'

function App() {

  const item = data.map((item) => {
    return <  Journeys
      key={item.id}
      item={item}
    />

  })

  return (
    <div>
      <Header />
      {item}
    </div>
  );
}

export default App;
