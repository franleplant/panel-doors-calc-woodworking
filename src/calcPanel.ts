// Everything in milimiters
interface IParams {
  openingWidth: number;
  openingHeight: number;
  stockWidth: number;
  stockThickness: number;
  overhangXLeft: number;
  overhangXRight: number;
  overhangYLeft: number;
  overhangYRight: number;
  tenonLength: number;
}

interface IResult {
  panelHeight: number;
  panelWidth: number;
  styleLength: number;
  railLength: number;
  innerPanelWidth: number;
  innerPanelHeight: number;
}

interface ICalcPanel {
  (params: Partial<IParams>): IResult;
}

const DEFAULT_PARAMS = {
  stockWidth: 50,
  stockThickness: 19,
  overhangXLeft: 10,
  overhangXRight: 10,
  overhangYLeft: 23,
  overhangYRight: 23,
  tenonLength: 10
};

export const calcPanel: ICalcPanel = params => {
  const {
    openingWidth,
    openingHeight,
    stockWidth,
    overhangXLeft,
    overhangXRight,
    overhangYLeft,
    overhangYRight,
    tenonLength
  } = { ...DEFAULT_PARAMS, ...params } as IParams;

  const panelHeight = openingHeight + overhangYLeft + overhangYRight;
  const panelWidth = openingWidth + overhangXLeft + overhangXRight;

  const styleLength = panelHeight;
  const railLength = panelWidth - 2 * stockWidth + 2 * tenonLength;

  const innerPanelHeight = styleLength - 2 * stockWidth + 2 * tenonLength;
  const innerPanelWidth = railLength;

  return {
    panelHeight,
    panelWidth,
    styleLength,
    railLength,
    innerPanelWidth,
    innerPanelHeight
  };
};
