import Movies from './Components/Movies';
import './App.css';
import Header from './Components/Header';
import movia from'./movie.json'

function App()  {  
    return (
      <div className="App">
      <Header/>  
      <div className='main'>
        {
          movia.map((element , index) =>{
            return(
            <Movies 
            key={index}
            title={element.Title} 
            year={element.Year}
            img={element.Poster}
            imdb={element.imdbID}
              />
            )
          })
        }
      </div>
      </div>
    )
  }
export default App 