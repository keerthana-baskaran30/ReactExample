import './App.css';
import Greet,{Home,ExpenseEntryItem, Counter} from './components/Home'


const name = "Grape Juice"
const amount = 30.00
const spendDate = new Date("2020-10-10")
const category = "Food"



const item = {
  id: 1, 
  name : "Grape Juice", 
  amount : 30.5, 
  spendDate: new Date("2020-10-10"), 
  category: "Food" 
}

function App() {
  return (
    <div className="App">
        <Greet name = "Keerthana"/>
        <Home/> 
      {/* <ExpenseEntryItem 
               name={name} 
               amount={amount} 
               spendDate={spendDate} 
               category={category} />, */}

      <ExpenseEntryItem item = {item}/>
      <button onClick = {Counter}> click</button>
      <Counter></Counter>
     
    </div>
  );
}

export default App;
