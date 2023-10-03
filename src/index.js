
import store from "./store/configureStore";
import { addEmployee } from "./store/employees";
import { addTask, completedTask } from "./store/tasks";

store.dispatch(addEmployee({name : "Mitesh Ladva"}));
console.log(store.getState());

store.dispatch(addEmployee({name : "Mitesh Ladva 2"}));
console.log(store.getState());

store.dispatch(addTask({task : "Task 1"}));
store.dispatch(addTask({task : "Task 2"}));
console.log(store.getState());

store.dispatch(completedTask({id : 1}));
console.log(store.getState());