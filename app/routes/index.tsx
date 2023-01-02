import {useState, useRef, useLayoutEffect} from 'react';

export default function Index() {
    console.log({global: global, self: self});

    console.log("Hi I'm Daisy! This is global: ", global);

    console.log("Hi, I'm Peach, this is self: ", self);
     
  return (
    <div className="app flex-row">
    {typeof window !== 'undefined' && <SuperDuper />}
    </div>  );}


function SuperDuper() {
  return (
          <div className="box" >
          Hover Me
          </div>

  )
    }
