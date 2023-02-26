export function result(result: any) {
  console.log('Here is action!!!');
  return {
    type: 'ADD_RESULT',
    payload: result,
  };
}
