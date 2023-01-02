import {useState, useRef, useLayoutEffect} from 'react';

export default function Index() {
     
  return (
    <div className="app flex-row">
    {typeof window !== 'undefined' && <SuperDuper />}
    </div>  );}


function SuperDuper() {
    console.log({global});
  return (
          <div className="box" >
          Hover Me
          </div>

  )
    }
