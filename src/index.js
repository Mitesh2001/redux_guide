
import store from "./store/configureStore";
import { addTask, completedTask } from "./store/tasks";

store.dispatch(addTask({task : "Task 1"}));
store.dispatch(addTask({task : "Task 2"}));
console.log(store.getState());

store.dispatch(completedTask({id : 1}));
console.log(store.getState());