import { useState } from "react";
import "./App.css";
import "../public/buttons.css";
import { CallApi } from "./services/api-service";

const QouteProps = {
  content:
    "Maybe nothing in this world happens by accident. As everything happens for a reason, our destiny slowly takes form.",
  author: "Silvers Rayleigh",
};

const App = () => {
  const [apiData, setApiData] = useState(QouteProps);
  const [loading, setLoading] = useState(false); // calling api status

  const GenerateQuote = async () => {
    // execute what you want
    try{
      setLoading(true);
      const fetchData = await CallApi();
      setApiData(fetchData);
    }
    // throw an error if the execution failed
    catch(error){
      console.error('Failed Fetching Data')
    }
    // execute final result
    finally{
      setLoading(false);
    }
  };

  return (
    <>
      <div className="app-body">
        <div className="app-box">
          <div className="head-box">
            <h1 className="title">
              Random <span id="nova">Quotes</span> Generator
            </h1>
            <h3 className="subtitle">
              This website designed to deliver a daily dose of
              inspiration through a random selection of quotes. It offers users
              a convenient way to access thought-provoking and motivational
              quotes at any time, enhancing their mindset and outlook on life.
            </h3>
          </div>

          { loading == true ? ( // if loading
            <div className="qoute-box">
              <p className="qoute">Loading...</p>
            </div>
          ) : (
            apiData && ( // else
              <div className="qoute-box">
                <p className="qoute">"{apiData.content}"</p>
                <div className="author"> - {apiData.author} </div>
              </div>
            )
          )}


          <div className="btn-row">
            <button onClick={GenerateQuote} className="beautiful-button">
              Generate Quote <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="foot-box">
            Made with <i className="fa-solid fa-heart" id="heart"></i> by{" "}
            <span id="me">Aron Paul Gonzales</span>
            <br />
            React + TypeScript + Vanilla CSS
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
