import { componnetRender } from "shared/lib/tests/componentRender/componentRender"
import { Counter } from "./Counter"
import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"

describe('counter', () => {
  test('with only first param', () => {
    componnetRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId("value")).toHaveTextContent('10');
  })

  test("increment", async () => {
    componnetRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })

    const user = userEvent.setup();

    await user.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId("value")).toHaveTextContent('11');
  })

  test("decrement", async () => {
    componnetRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    const user = userEvent.setup();

    await user.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId("value")).toHaveTextContent('9');
  })

})