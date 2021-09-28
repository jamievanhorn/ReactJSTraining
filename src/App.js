import './App.css';
import {
   Container, 
   Grid, 
   Segment, 
   Icon   
  } from 'semantic-ui-react';
import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLine from './Components/EntryLine'

function App() {
  return (
    <Container>
      <MainHeader title='Budget'/>   
      <DisplayBalance title="Your balance" value ="6000" size='small'/>   
      <DisplayBalances/>

      <MainHeader title='History' type='h3'/>

      <EntryLine description="income" value="100.00"/>
      <EntryLine description="expense" value="10.00" isExpense/>
      
      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm></NewEntryForm>
    </Container>
  );
}

export default App;
