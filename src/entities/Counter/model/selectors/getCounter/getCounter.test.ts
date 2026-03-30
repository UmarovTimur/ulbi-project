import { StateSchema } from "app/providers/Store"
import { getCounter } from "./getCounter"

describe('getCounter', () => {
  test('should return counter', () => {
    const state: StateSchema = {
      counter: { value: 10 }
    } as StateSchema;

    expect(getCounter(state)).toEqual({ value: 10 });
  })
})