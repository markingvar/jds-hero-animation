import {useState, useRef, useLayoutEffect} from 'react';

export default function Index() {
    console.log({global, self});
     
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
