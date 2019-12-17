import React from 'react';
import { render } from 'react-dom';
import Draggleable from '../dist/bundle';
import '../dist/main.css';
import './index.css';

const App = () => (
  <div>
    <h2>draggable and resizable, direction 'west'</h2>
    <div className="container-v">
      <div className="prev">Prev Element</div>
      <Draggleable direction="w" />
      <div className="next">Next Element</div>
    </div>
    <h2>resizable, direction 'west'</h2>
    <div className="container-v">
      <div className="prev">Prev Element</div>
      <Draggleable direction="w" dragDisabled />
      <div className="next">Next Element</div>
    </div>
    <h2>draggable and resizable, adaptive, direction 'east'</h2>
    <div className="container-v">
      <div className="next">Prev Element</div>
      <Draggleable direction="e" adaptive />
      <div className="prev">Next Element</div>
    </div>
    <h2>draggable and resizable, direction 'north'</h2>
    <div className="container-h">
      <div className="prev-h">Prev Element</div>
      <Draggleable direction="n" />
      <div className="next-h">Next Element</div>
    </div>
    <h2>draggable and resizable, direction 'south'</h2>
    <div className="container-h">
      <div className="prev-h">Prev Element</div>
      <Draggleable direction="s" />
      <div className="next-h">Next Element</div>
    </div>
  </div>
);

render(<App />, document.body);
