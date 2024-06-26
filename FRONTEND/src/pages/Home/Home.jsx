import './Home.css';
import welcomePicture from '../Home/multimedia/welcome.png';

function Home() {
  return (
    <div className="home-container">
      <p>
        Ready to jump into a new adventure ? <br />
        <br />
        You just found the perfect page to comment your favorite Zelda games with gamers from all around the world ! <br />
      </p>
      <img src={welcomePicture} alt="welcomePicture" />
    </div>
  );
}

export default Home;
