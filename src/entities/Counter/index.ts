import { Counter } from "./ui/Counter";
import { CounterSchema } from "./model/types/counterSchema";
import { counterReducer, counterActions } from "./model/slice/counterSlice";

export {
  Counter,
  counterActions,
  counterReducer
}
export type {
  CounterSchema
}