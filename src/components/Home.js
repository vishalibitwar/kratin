import React, { Fragment } from "react";
import "../css/style.css";
import history from "./History";
const Home = () => {
  return (
    <Fragment>
      <div className='cards'>
        <div className='card'>
          <h2> Are you safe?</h2>
          <p>Basic protective measures against the new coronavirus</p>
          <button
            onClick={() => {
              history.push("/Safequiz");
            }}
            className='btn'
          >
            Take a quiz
          </button>
        </div>
        <div className='card'>
          <h2>Protective measures</h2>
          <p>Basic protective measures against the new coronavirus</p>
          <button
            onClick={() => {
              history.push("/Measures");
            }}
            className='btn'
          >
            Take a quiz
          </button>
        </div>
        <div className='card'>
          <h2>Myth Busters</h2>
          <p>Common myths and misconceptions regarding COVID-19</p>
          <button className='btn'>Take a quiz</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
