import Navbar from './components/Navbar'
import Card from './components/Card'
import katie from './images/katie-zaferes.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card img={katie} 
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
        />
      <Card img={katie} 
        rating="4.0"
        reviewCount={6}
        country="UK"
        title="Schwimming"
        price={136}
        />
    </div>
  );
}

export default App;
