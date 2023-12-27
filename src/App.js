
import './App.css';
import { BrowserRouter,Route,Routes, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import UserList from './UserList';
import CreateUser from './CreateUser';
import ViewUser from './ViewUser';
import EditUser from './EditUser';



function App() {



  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navbar/>}> </Route>

    <Route  path="/user-list"  element={<UserList/>}> </Route>
    <Route path="/create-user" element={<CreateUser/>}> </Route>
 <Route path="/view-user" element={<ViewUser/>}></Route>
 <Route path="/edit-user/:id" element={<EditUser/>}></Route>

   </Routes>
    
    </BrowserRouter>
  );
}

export default App;