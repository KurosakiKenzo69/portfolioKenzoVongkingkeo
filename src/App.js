import Navbar from "./components/Navbar";
import Competences from "./components/Competences";
import Home from "./pages/Home";
import GithubRepos from "./api/api_Github";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <body>
        <Home></Home>
        <Timeline></Timeline>
        <Competences></Competences>
        <GithubRepos></GithubRepos>
        <Contact></Contact>
        <Footer></Footer>
        
      </body>
    </div>
  );
}

export default App;
