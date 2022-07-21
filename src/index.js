import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Data} from './data';
import {Accordion} from './accordion'


const Main =()=>{
const [data,setData] = React.useState(Data);
  return <>
    <Accordion data={data}/>
  </>
}



ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);


