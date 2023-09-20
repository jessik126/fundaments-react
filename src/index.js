import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';
import Fragment from './components/basics/Fragment';

ReactDOM.render( 
  <div id="app">
    <First></First>
    <WithParameter title="Grades" studant="Peter" grade={9.8} />
    <WithParameter title="" studant="Mary" grade={9.5} />
    <Fragment/>
  </div>, 
  document.getElementById('root'));