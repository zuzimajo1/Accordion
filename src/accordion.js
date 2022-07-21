import React from 'react';
import {Accordionmain} from './accordionmain'


export const Accordion = ({data})=>{
    return (
      <main className="main">
        <section className="container">
          <div className="wrapper">
            <div className="firstwrapper">
              <h3>questions and answers about login</h3>
            </div>
            <div className="secondwrapper">
              <div className='secondwrapper2'>
                {data.map((items)=>{
                  return (
                    <section key={data.id}>
                      <Accordionmain key={data.id} {...items} />
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <h2 className='author'>Coded by: <span className='authorname'>Zuzim Ajo</span></h2>
      </main>
    );
}