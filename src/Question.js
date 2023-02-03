import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./Question.css";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className='questionWrapper'>
      <div className="titleWrapper">
        <div className='title'>{title}</div>
        <button className='btn' onClick={() => setShowInfo((prevHideInfo) => !prevHideInfo)}>
          { showInfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }
        </button>
      </div>
      { showInfo && <div>{info}</div> }
    </div>
  );
};

export default Question;