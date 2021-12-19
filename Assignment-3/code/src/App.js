import React from 'react';
import logo from './logo.svg';
import './App.css';



var arrow="<"
var arrow1=">"
const client = {
  'Name': 'Alan Ford',
  'EmployeeID':54515152,
  'Appointment': '9:00 (24-05-2016)',
  'Email': 'alanford@mail.nl',
  'Phone': 9211111198,
  'Status': 'In Progress',
  'Door': 'Mark',
  'Time': '10:30 (25-05-2016)',
  'ProfileImg': 'https://www.w3schools.com/howto/img_avatar.png'
  
}

function App(){
  return (
    <div className="site-container">
      
        <div className='main_container1'>
          <div className='arrow'><p>{arrow}</p></div>
          <div className='head'>
          <h5>{client.Name}</h5>
          <span>{client.EmployeeID}</span>
          </div>
          <div className='btn'><button type="button">Print</button></div>
        </div>

        <div className='customer-info'>
          <table className='table'>
            <tr>
              <th>Appointment On</th>
              <td>{client.Appointment}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{client.Email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{client.Phone}</td>
            </tr>
           </table>
        </div>
        <div className='order-info'>
          <table className='table1'>
            <tr className='row'>
              <th>Status</th>
              <ul><li>{client.Status}</li></ul>
            </tr>
            <tr>
              <th>Door</th>
              <td>{client.Door}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{client.Time}</td>
            </tr>
          </table>
        </div>
        <div className='product-list'>
          <label className='checkbox'>
            <input type="checkbox" value='on'/>
          </label>
          <div className='profile_img'>
            <img src={client.ProfileImg} alt='AVTAR'></img>
          </div>
          <div className='content'>
            <h3>Boltaart Bosbessen</h3>
            <p>Here's a demo that includes the :disabled styles, and also shows how the power of CSS</p>
          </div>
          <div className='arrow1'>
            <p>{arrow1}</p>
          </div>
        </div>
    </div>
  );
}

export default App;
