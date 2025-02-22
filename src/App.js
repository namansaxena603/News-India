import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';

function App(props) {
  return (
    <>

      <div className="main" style={{ backgroundColor: "whiteSmoke", fontFamily: 'Poppins, sansSerif', marginTop: "-45px" }}>
        <Navbar />
        <News title={props.title} description={props.description} imageUrl={props.urlToImage} newsUrl={props.url} author={props.author} date={props.publishedAt} />
        <Footer />
      </div>
    </>

  );
}

export default App;
