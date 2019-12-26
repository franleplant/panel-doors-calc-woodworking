import { calcPanel } from "./calcPanel";

it("basic calcPanel test", () => {
  const actual = calcPanel({ openingWidth: 612, openingHeight: 105 });
  const expected = {
    innerPanelHeight: 71,
    innerPanelWidth: 552,
    panelHeight: 151,
    panelWidth: 632,
    railLength: 552,
    styleLength: 151
  };

  expect(actual).toEqual(expected);
});
