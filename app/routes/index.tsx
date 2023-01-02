import {useState, useRef, useLayoutEffect} from 'react';
import {useGsap} from '~/utils/gsap';

export default function Index() {
     
  return (
    <div className="app flex-row">
    {typeof window !== 'undefined' && <SuperDuper />}
    </div>  );}


function SuperDuper() {
    let gsap = useGsap();
    const [tl, setTl] = useState();

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
    };
  return (
          <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Hover Me
          </div>

  )
    }
