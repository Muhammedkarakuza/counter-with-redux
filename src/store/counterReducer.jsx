const initialState = {
  count: 0,
};
const INC = "INC";
const RES = "RES";
const DEC = "DEC";
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        count: state.count + 1,
      };
    case RES:
      return {
        count: 0,
      };
    case DEC:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};
