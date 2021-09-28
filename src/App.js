import './App.css';
import {Container, Header, Statistic} from 'semantic-ui-react'

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your balance</Statistic.Label>
        <Statistic.Value>2505.52</Statistic.Value>
      </Statistic>
    </Container>
  );
}

export default App;
