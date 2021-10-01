import './App.css';
import {
  Container
} from 'semantic-ui-react';
import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import { useState, useEffect } from 'react';
import EntryLines from './Components/EntryLines';
import ModalEdit from './Components/ModalEdit';
import {useSelector} from 'react-redux';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector((state )=> state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      //setEntires(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  useEffect(() => {
    let expenseTotal = 0;
    let incomeTotal = 0;
    entries.map((entry) => {
      if (entry.isExpense) { return (expenseTotal += Number(entry.value)) }
      else return (incomeTotal += Number(entry.value))
    });
    setTotal(incomeTotal - expenseTotal);
    setExpenseTotal(expenseTotal);
    setIncomeTotal(incomeTotal);
  }, entries);

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log('result', result);
    console.log('entries', entries);
    //setEntires(result);
    resetEntry();
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title="Your balance" value={total} size='small' />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title='History' type='h3' />
      <EntryLines entries={entries} setIsOpen={isOpen} editEntry={editEntry} />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense} />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense} />

    </Container>
  );
}

export default App;