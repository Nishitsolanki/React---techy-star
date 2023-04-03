import "./App.css";
import Header from "./componets/Header";
import Movie from "./componets/Movie";
import moviess from "./moviess.json";

function App() {
  let login = false

  if (login === true){
    return <h1> nishit  </h1>
  }

  
  return (
    <div className="App">

      {
        login === true ? <h1 style={{color: 'black'}}> nisjiy</h1> : <div> aaravcc</div>
      }
      <Header />

      <div className="main">
        {moviess.map((element,index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
