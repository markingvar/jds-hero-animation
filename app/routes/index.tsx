import {useState, useRef, useLayoutEffect} from 'react';
import {useGsap} from '~/utils/gsap';

export default function Index() {
     
  return (
    <div className="app flex-row">
    {typeof window !== 'undefined' && <SuperDuper />}
    </div>  );}


function SuperDuper() {
    console.log({global});
    let gsapTo = function () {};
    useLayoutEffect(() => {
        let {to} = useGsap();

        gsapTo = to;
    }, []);
    const [tl, setTl] = useState();

    const onEnter = ({ currentTarget }) => {
        to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
    };

    const onLeave = ({ currentTarget }) => {
        to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
    };
  return (
          <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Hover Me
          </div>

  )
    }
