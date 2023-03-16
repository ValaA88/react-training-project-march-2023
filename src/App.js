import './App.css';
import { useState } from 'react';
import Employee from './components/Employee';

function App() {
  const [role, setRole] = useState('dev');

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Calob" role="Intern" />
          <Employee name="Abby" role={role} />
          <Employee name="John" />
        </>
      ) : (
        <p> you can not see the employees</p>
      )}
    </div>
  );
}

export default App;
