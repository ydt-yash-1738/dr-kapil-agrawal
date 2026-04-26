import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutDoctor from './pages/AboutDoctor';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-doctor" element={<AboutDoctor />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;