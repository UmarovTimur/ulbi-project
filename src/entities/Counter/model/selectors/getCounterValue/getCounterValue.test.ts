import { StateSchema } from "app/providers/Store"
import { getCounterValue } from "./getCounterValue"

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: StateSchema = {
      counter: { value: 10 }
    } as StateSchema;

    expect(getCounterValue(state)).toEqual(10);
  })
})