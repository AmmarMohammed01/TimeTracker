import './styles/table_style.css';

export default function Table() {
  return(
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th style={{borderTopLeftRadius:'20px'}}>Date</th>
            <th>Category</th>
            <th style={{borderTopRightRadius:'20px'}}>Time Spent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/25/2024</td>
            <td>Developing</td>
            <td>1hr</td>
          </tr>
          <tr>
            <td style={{borderBottomLeftRadius:'20px'}}>&nbsp;</td>
            <td></td>
            <td style={{borderBottomRightRadius:'20px'}}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}