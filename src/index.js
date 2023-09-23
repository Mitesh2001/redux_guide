
import store from "./store/configureStore";
import { addTask, completeTask } from "./store/tasks";

store.dispatch(addTask("Task another"))
console.log(store.getState());

store.dispatch(completeTask(1))
console.log(store.getState());