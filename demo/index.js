import React from 'react';
import { render } from 'react-dom';
import Draggleable from '../dist/bundle';
import './index.css';

const App = () => (
  <div>
    <div className="container-v">
      <div className="prev">Prev Element</div>
      <Draggleable direction="w" />
      <div className="next">Next Element</div>
    </div>
    <div className="container-v">
      <div className="prev">Prev Element</div>
      <Draggleable direction="e" />
      <div className="next">Next Element</div>
    </div>
    <div className="container-h">
      <div className="prev-h">Prev Element</div>
      <Draggleable direction="n" />
      <div className="next-h">Next Element</div>
    </div>
    <div className="container-h">
      <div className="prev-h">Prev Element</div>
      <Draggleable direction="s" />
      <div className="next-h">Next Element</div>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
