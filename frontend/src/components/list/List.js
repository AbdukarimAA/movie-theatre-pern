import './list.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {ListItem} from "../listItem/ListItem";
import {useRef, useState} from "react";

export const List = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [isSlider, setIsSlider] = useState(0);
    const ref = useRef();
    const handleClick = (direction) => {
        setIsMoved(true);
        let dist = ref.current.getBoundingClientRect().x - 50;

        if(direction === 'left' && isSlider > 0) {
            setIsSlider(isSlider - 1)
            ref.current.style.transform = `translateX(${270 + dist}px)`
        }

        if(direction === 'right' && isSlider < 5) {
            setIsSlider(isSlider + 1)
            ref.current.style.transform = `translateX(${-270 + dist}px)`
        }
    };

  return (
      <div className='list'>
          <span className='listTitle'>
              Сейчас смотрят
          </span>
          <div className="wrapper">
                <ArrowBackIosNewIcon
                    className='arrowIcon left'
                    onClick={() => handleClick('left')}
                    style={{display: !isMoved && 'none'}}
                />
                <div className="container" ref={ref}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                    <ListItem index={10}/>
                    <ListItem index={11}/>
                </div>
                <ArrowForwardIosIcon className='arrowIcon right' onClick={() => handleClick('right')} />
          </div>
      </div>
  );
}