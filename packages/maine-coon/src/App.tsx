import './styles/App.css'
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Clock from './components/ClockCard';
import Card from './components/Card';
import Main from './components/Main';
import ClockCard from './components/ClockCard';

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Main>
        <div className="cards">
          <ClockCard />
          <Card 
            title={"card 1"}
            content={""}
          />
          <Card 
            title={"card 2"}
            content={""}
          />
        </div>
      </Main>
    </Layout>
  );
}

export default App;