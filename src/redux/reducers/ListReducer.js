export const removeItem = index => dispatch => {
  dispatch({
    type: "REMOVE_LIST_ITEM",
    payload: index
  });
};
export const selectItem = index => dispatch => {
  dispatch({
    type: "SELECT_ITEM",
    payload: index
  })
};

const initialState = {
  listItems: [
    { label: "Reset password" },
    { label: "Migrate emails for clients" },
    { label: "Deliver new password after reset" },
    { label: "permission for folders" }
  ],
  selectedListIndex: 0
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_LIST_ITEM":
      return {
        ...state,
        listItems: state.listItems.filter((item, index) => index !== action.payload)
      };
    case "SELECT_ITEM":
      return {
        ...state,
        selectedListIndex: action.payload
      };
    default:
      return state;
  }
};

export default ListReducer;