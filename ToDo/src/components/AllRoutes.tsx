import { Routes, Route, Navigate } from 'react-router-dom';
import NewToDo from './NewToDo';

const AllRoutes = () => {
  return (
    <Routes>
      
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewToDo />} />
        <Route path="/:id">
            <Route index element={<h1>Show</h1>}/>
            <Route path="edit" element={<h1>Edit</h1>}/>
        </Route>
        <Route path="/*" element={<Navigate to="/"/>} />

    </Routes>
  );
};

export default AllRoutes;
