import './styles/style.css';
import calendar from './icons/Calendar.png';
import categories from './icons/Categories.png';
import stopwatch from './icons/Stopwatch.png';

function App() {

  return (
    <>
    <div className="title">Time Tracker</div>

    <div className='inputBox'>
      <label htmlFor="trackDate">Date <img src={calendar}/></label>
      <input type="date" id="trackDate"/>

      <label htmlFor="trackCategory">Category <img src={categories}/></label>
      <input type="text" id="trackCategory"/>

      <label htmlFor="trackTimeSpent">Time Spent <img src={stopwatch}/></label>
      <input type="text" id="trackTimeSpent" />

      <input type="submit" />
    </div>

    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Time Spent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/25/2024</td>
            <td>Developing</td>
            <td>1hr</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
