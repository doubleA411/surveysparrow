import {useState} from 'react';
import './scss/accordian.scss'

function Accordian(props) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
      {props.title}
      <div className="panel" style={{ display: isActive ? 'block' : 'none' }}>
        <p>{props.content}</p>
      </div>
    </div>

  );
}

export default Accordian