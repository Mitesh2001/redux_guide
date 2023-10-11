import { produce } from 'immer';

const App = () => {

  const employee = { name: "mitesh", age: 20 };
  const newEmployee = produce(employee,(draftState) => {
    draftState.name = "Ladva"
  });

  console.log("employee",employee);
  console.log("newEmployee",newEmployee);

}

export default App;