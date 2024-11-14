import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import BookList from './components/bookslist';
import BookAdd from './components/booksAdd';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header /> {/* Header is now fixed */}
      <main style={{ paddingTop: '120px' }}> {/* Add top padding to prevent content from hiding under the header */}
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<BookAdd />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;