import React, { useEffect } from 'react';
import './App.css';
import cityApi from 'api/cityApi';
import {Routes, Route} from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { Admin } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';
import Dashboard from 'features/dashboard/Dashboard';
import Student from 'features/student/Student';

function App() {

  useEffect(() => {
    cityApi.getAll().then(response => console.log(response.data));
  })

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route
          path="admin"
          element={
            <PrivateRoute>
              <Admin/>
            </PrivateRoute>
          }
        >
          <Route
            path="dashboard"
            element={<Dashboard/>}
          />
          <Route
            path="student"
            element={<Student/>}
          />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
