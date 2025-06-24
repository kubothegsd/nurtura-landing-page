import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import { QuizPreview } from './components/landing/Quiz/QuizPreview';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/quiz' element={<QuizPreview />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
