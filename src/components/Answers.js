import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import '../css/quiz.css';

const Answers = ({ a }) => {
  return (
    <Fragment>
      <hr />
      <div className='answers'>
        <h1>{a.title}</h1>
        <p>{a.description}</p>
        {a.youtubeUrl && <ReactPlayer url={a.youtubeUrl} />}
        {a.imgUrl && <img src={a.imgUrl} />}
      </div>
    </Fragment>
  );
};

export default Answers;
