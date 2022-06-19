export const demandsFromUser = (Paragraphs) => (dispatch) => {
  try {
    dispatch({ type: 'DEMAND_USER', payload: Paragraphs })
  } catch (error) {}
}
export const UserContentsDemand = (contents) => (dispatch) => {
  console.log('contents action ', contents)
  try {
    dispatch({ type: 'CONTENTS_USER', payload: contents })
  } catch (error) {}
}


export const IncCorrectWords = (IncCorrectWords) => (dispatch) => {
  try {
    dispatch({ type: 'INC_CORRECT_WORD', payload: IncCorrectWords })
  } catch (error) {}
}
export const DecCorrectWords = (DecCorrectWords) => (dispatch) => {
    try {
        dispatch({ type: 'DEC_CORRECT_WORD', payload: DecCorrectWords })
    } catch (error) {}
}
export const lenthsOFContents = (lenthsOFContents) => (dispatch) => {
    try {
        dispatch({ type: 'LENTHS', payload: lenthsOFContents })
    } catch (error) {}
}
export const improveAccuracy = (improveAccuracy) => (dispatch) => {
    try {
        dispatch({ type: 'IMPROVEMENTS', payload: improveAccuracy })
    } catch (error) {}
}

export const originalWordChoose = (originalWordChoose) => (dispatch) => {
  console.log('originalWordChoose action ', originalWordChoose)
  try {
    dispatch({ type: 'ORIGINA_WORD', payload: originalWordChoose })
  } catch (error) {}
}
export const wrongWordChoose = (wrongWordChoose) => (dispatch) => {
  console.log('wrongWordChoose action ', wrongWordChoose)
  try {
    dispatch({ type: 'DUBLICATE_WORD', payload: wrongWordChoose })
  } catch (error) {}
}