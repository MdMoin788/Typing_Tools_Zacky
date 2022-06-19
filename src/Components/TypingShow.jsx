import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TypingShows from "../../src/Styles/TypingShow.module.css"
import { useDispatch } from 'react-redux'
import { DecCorrectWords, improveAccuracy, IncCorrectWords, lenthsOFContents, originalWordChoose, UserContentsDemand, wrongWordChoose } from '../Redux/Action'
import Contents from "./Contents"
import { useNavigate } from 'react-router-dom'
let stat = false
const TypingShow = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(lenthsOFContents(contents.length))
  }, [])
  const contents = useSelector((store) => store.contents.Contents)
  const demand = useSelector((store) => store.typing.demandUser)
  const CorrectWords = useSelector((store) => store.typing.CorrectWords)
  const lengthOfContentss = useSelector((store) => store.typing.lengthOfContents)
  const WrongWords = useSelector((store) => store.typing.WrongWords)
  const [timer, setTimer] = useState(0)
  const [textValue, SetTextValue] = useState("")
  const [toggle, setToggle] = useState(true)
  document.body.onkeyup = function (e) {
    if (e.key == " " ||
      e.code == "Space" ||
      e.keyCode == 32
    ) {
      let textValueSpace = textValue.split(' ')
      if (contents.includes(textValueSpace[textValueSpace.length - 2])) {
        dispatch(IncCorrectWords(1))
      } else {
        dispatch(originalWordChoose(contents[0]))
        dispatch(wrongWordChoose(textValueSpace[textValueSpace.length - 2]))
        dispatch(DecCorrectWords(1))
      }
      contents.shift()
      dispatch(UserContentsDemand(contents))
    }
  }
  const handleTypeInput = () => {
    let timer = +demand.timing * 60
    let x = setInterval(function () {
      console.log('stat', stat);
      if (stat == true) {
        clearInterval(x)
      }
      let decreasingTime = timer--
      setTimer(decreasingTime)
      console.log(decreasingTime)
      if (timer == 1) {
        setTimeout(function () {
          console.log("Time Is Over")
          alert("Time Is Over")
        }, 1000)
        clearInterval(x)
      }
      else {
      }
    }, 1000)
    setToggle(false)
  }
  const navigateToResult = () => {
    stat = true
    dispatch(improveAccuracy(Math.floor(CorrectWords / (CorrectWords + WrongWords) * 100)))
    navigate("/results")
  }
  return (
    <div>
      <div className={TypingShows.Result}>
        <div>Time : {timer}</div>
        <div> Correct : {CorrectWords}</div>
        <div>Wrong : {WrongWords}</div>
        <div>Accuracy : {CorrectWords >= 1 || WrongWords >= 1 ? <>{Math.floor(CorrectWords / (CorrectWords + WrongWords) * 100)}%</> : <>0 %</>}</div>
      </div>
      <br />
      <div className={TypingShows.InputContents2}>
        <div className={TypingShows.InputContents3}>
          <Contents></Contents>
        </div>
      </div>
      <br />
      <div className={TypingShows.InputContentsInput}>
        <div >
          <textarea disabled={toggle || contents.length == 0 ? true : false} onChange={(e) => SetTextValue(e.target.value)} className={TypingShows.InputContentsInputText} placeholder="Start Typing Here......" name="" id="" cols="90" rows="10"></textarea>
        </div>
      </div>
      <div className={TypingShows.InputContents}>
        <div>
          <button className={TypingShows.InputContentsBtn} onClick={handleTypeInput} >Start Typing Now</button>
          <button className={TypingShows.InputContentsBtn2} onClick={navigateToResult} >Show Result</button>
        </div>
      </div>
    </div>
  )
}
export default TypingShow
