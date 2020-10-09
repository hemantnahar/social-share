import React from 'react';
import './App.css';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

function App() {
  return (
    <div className="App">
      <FacebookShareButton url={'https://scotch.io'} quote={"გააზიარე"} className="share">
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={'https://scotch.io'} quote={"გააზიარე"} className="share">
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </div>
  );
}

export default App;
