import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Table from './pages/Table';
import BookDetail from './pages/BookDetail';
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/table" element={
              <ProtectedRoute>
                <Table/>
              </ProtectedRoute>
          } />
            <Route path="/book/:id" element={
                <ProtectedRoute>
                    <BookDetail/>
                </ProtectedRoute>
            } />
        </Routes>
      </>
  );
};

export default App;
