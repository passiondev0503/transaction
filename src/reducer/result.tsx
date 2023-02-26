export default function (state = null, action: any) {
  // SWITCH STATEMENT TO CHECK ACTION TYPE
  switch (action.type) {
    case 'ADD_RESULT':
      return action.payload;
  }
  // RETURN UPDATED STATE
  return state;
}
