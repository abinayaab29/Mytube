import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import RecommendedVideos from './Components/RecommendedVideos.js';
function App() {
  return (
    <div className="App">
      
      <Header />
       <div className = "app_page">
         <Sidebar />
         <RecommendedVideos/>
       </div>
    </div>
  );
}

export default App;
