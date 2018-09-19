import * as React from 'react';
import * as Spinner from 'react-spinkit';
import './PreLoaderBallGrill.css';
interface AppProps {
}

const App: React.SFC<AppProps> = (props) => {
  return (

  <div style={{paddingTop: '10%'}}>   
                             
    <div style={{height: '110px'}}><Spinner name="ball-grid-pulse" color="#0099E0" className="center-loader" fadeIn="half" /></div>
    <h4 className="center-loader fade-in" style={{textAlign: 'center', color: '#0099E0'}}>LOADING</h4></div>
    );
};

export default App;      