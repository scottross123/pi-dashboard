import './styles/app.css'
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Clock from './components/Clock';

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <main>
        <Clock /> 
      </main>
    </Layout>
  );
}

export default App;