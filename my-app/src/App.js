// import logo from './logo.svg';
import './App.css';


const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
  }
function App() {
  return (
    <div className="App">
        <img src={employee.profileImg} className="App-logo" alt="logo" />
        <div className="list1">
          <h1 className="name">{employee.name}</h1>
        <tb className="table">
          <tr>
           <ti>Loction</ti>
           <ti className="ti_size">{employee.location}</ti>
          </tr>
          <tr>
           <ti>Blood Group</ti>
           <ti className="ti_size">{employee.bloodGroup}</ti>
          </tr>
          <tr>
           <ti >Age</ti>
           <ti className="ti_size">{employee.age}</ti>  
          </tr>       
        </tb>
        </div>
        
        


    </div>
  );
}

export default App;
