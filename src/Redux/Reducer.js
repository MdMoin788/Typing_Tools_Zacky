const initState = {
  demandUser: null,
  CorrectWords: 0,
  WrongWords: 0,
  lengthOfContents: null,
  improvement: null,
  improvementRound: null,
  originalWord: [],
  dublicateWord: [],
  
}
export const Reducers = (store = initState, { type, payload }) => {
  console.log('payload', payload)
  switch (type) {
    case 'DEMAND_USER':
      return { ...store, demandUser: payload }
    case 'LENTHS':
      return { ...store, lengthOfContents: payload }
    case 'ORIGINA_WORD':
      return { ...store, originalWord: [...store.originalWord, payload] }
    case 'DUBLICATE_WORD':
      return { ...store, dublicateWord: [...store.dublicateWord, payload]  }
    case 'IMPROVEMENTS':
      return {
        ...store,
        improvement: payload,
        improvementRound: store.improvementRound + 1,
      }
    case 'INC_CORRECT_WORD':
      let IncWord = store.CorrectWords + payload
      console.log('moin', store.CorrectWords)
      return { ...store, CorrectWords: IncWord }
    case 'DEC_CORRECT_WORD':
      let DecWord = store.WrongWords + payload
      console.log('moin', store.WrongWords)
      return { ...store, WrongWords: DecWord }
    default:
      return store
  }
}
