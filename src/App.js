import Header from "./components/Header"
import data from "./data"
import Cards from "./components/Cards"


function App() {

  const card = data.map(item =>{
    return (
      <Cards 
        key = {item.id}
        {...item}
      />)
  })
  
  return (
    <div className="App">      
      <Header/>
      <div className="card--container">
      {card}
      </div>
    </div>
  );
}

export default App;
