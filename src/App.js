import React from 'react';
import logo from './logo.svg';
import './App.css';
import JSMpeg from 'jsmpeg-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playVideo: true,
      player: null,
    }
  }

  toggleVideo = () => {
    this.setState({
      playVideo: !this.state.playVideo
    }, () => {
      if(!this.state.playVideo) {
        let videoUrl = 'www.youtube.com';
        let videoWrapper = '#canvasParent';
        // let videoWrapper = this.refs['hideVideoRef'];
        let player = new JSMpeg.VideoElement(videoWrapper, videoUrl ,{
          // canvas: this.refs['showVideoRef']
        } );
        this.setState({player: player});

      } else {
        this.state.player.destroy();
        console.log('destroyed');
        this.setState({
          player: null,
        });
      }
    });
  }

  render(){
    console.log('rerendered');
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div id='canvasParent'>
            <canvas 
              className='video-player'
              ref={
                this.state.playVideo ? 'showVideoRef' : 'hideVideoRef'
              }
              id={
                this.state.playVideo ? 'showVideoRef' : 'hideVideoRef'
              }
            ></canvas>
          </div>
          <p>
            <input type='checkbox' onChange={this.toggleVideo} />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
