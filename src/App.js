import logo from "./logo.svg";
// import './App.css';
import Navbar from "./components/Navbar";
import Competences from "./components/Competences";
import Title from "./components/Title";
import Home from "./pages/Home";
import GithubRepos from "./api/api_Github";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <body>
        {/* <Competences></Competences> */}
        <Home></Home>
        <p className="text-gray-300 text-lg max-w-xl mb-11 mx-auto bg-gray-900 p-6 rounded-lg shadow-lg leading-relaxed">
          Je suis{" "}
          <span className="text-blue-400 font-semibold">Kenzo Vongkingkeo</span>
          , développeur web passionné et prêt à relever des défis ambitieux.
          Spécialisé en frontend avec
          <span className="text-green-400 font-medium"> React</span> et en
          backend avec{" "}
          <span className="text-yellow-400 font-medium">Node.js</span>, j'ai
          également de l'expérience avec
          <span className="text-purple-400 font-medium"> Symfony</span>, et des
          bases de données comme
          <span className="text-red-400 font-medium"> MySQL</span> et{" "}
          <span className="text-red-400 font-medium">PostgreSQL</span>. Mon
          expertise couvre la création d’applications web modernes,
          l’intégration d’API et le développement de solutions complètes et
          évolutives.
          <br />
          <br />
          Animé par une{" "}
          <span className="text-pink-400 font-semibold">
            quête de qualité
          </span>{" "}
          et un goût pour l’
          <span className="text-pink-400 font-semibold">innovation</span>, je
          suis motivé par les projets exigeants et aspire à concevoir des
          interfaces intuitives, esthétiques et fonctionnelles, où chaque détail
          compte. Prêt à m’investir pleinement, je suis déterminé à transformer
          chaque défi en réussite.
        </p>

        <About></About>

        <GithubRepos></GithubRepos>
        <Contact></Contact>
      </body>
    </div>
  );
}

export default App;
