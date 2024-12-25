import './styles/input_style.css'
import calendar from './icons/Calendar.png';
import categories from './icons/Categories.png';
import stopwatch from './icons/Stopwatch.png';

export default function InputBox() {
  return(
    <div className='inputContainer'>

      <div className="inputForm">

        <div className='inputLabelAndField'>
          <label htmlFor="trackDate" className='inputLabel'>Date <img src={calendar} className='icon'/></label>
          <input type="date" id="trackDate" className='inputField'/>
        </div>
        
        <div className='inputLabelAndField'>
          <label htmlFor="trackCategory" className='inputLabel'>Category <img src={categories} className='icon'/></label>
          <input type="text" id="trackCategory" className='inputField'/>
        </div>
        
        <div className='inputLabelAndField'>
          <label htmlFor="trackTimeSpent" className='inputLabel'>Time Spent <img src={stopwatch} className='icon'/></label>
          <input type="text" id="trackTimeSpent" className='inputField'/>
        </div>
        
      </div>

      <div style={{placeSelf:'center'}}>
        <input type="submit" className="submitButton"/>
      </div>
      
    </div>
  );
}