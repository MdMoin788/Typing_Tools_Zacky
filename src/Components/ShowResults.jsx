import React from 'react'
import { useSelector } from 'react-redux'
import Result from "../../src/Styles/Result.module.css"
const ShowResults = () => {
    const CorrectWords = useSelector((store) => store.typing.CorrectWords)
    const lengthOfContentss = useSelector((store) => store.typing.lengthOfContents)
    const demand = useSelector((store) => store.typing.demandUser)
    const improvementS = useSelector((store) => store.typing.improvement)
    const originalWords = useSelector((store) => store.typing.originalWord)
    console.log('originalWords', originalWords);
    const dublicateWords = useSelector((store) => store.typing.dublicateWord)
    console.log('dublicateWords', dublicateWords);
    const WrongWords = useSelector((store) => store.typing.WrongWords)
    console.log('WrongWords', WrongWords);
    return (
        <div>
            <div className={Result.parent}>
                <br />
                <br />
                <div>Correct Word : {CorrectWords}</div>
                <div>Wrong Word : {WrongWords}</div>
                <div>Accuracy Word : {CorrectWords >= 1 || WrongWords >= 1 ? <>{Math.floor(CorrectWords / (CorrectWords + WrongWords) * 100)}%</> : <>0 %</>}</div>
                <div>WPM  : {demand != null ? <>{Math.floor(CorrectWords + WrongWords / demand.timing)}</> : <>0 </>}  </div>
                <div>Improvement  : {improvementS} %</div>
                <br />
                <p className={Result.color}>Check Correct && Wrong Words Below :</p>
                <div className={Result.CorectWords} >
                    <div className={Result.CorectWords1}>
                        Correct Words :
                        <br />
                        <br />
                        {originalWords.map((ele) => {
                            return (
                                <div className={Result.CorectBorderpar}>
                                    <div className={Result.CorectBorder}>{ele}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={Result.CorectWords2}>
                        Wrong Words :
                        <br />
                        <br />
                        {dublicateWords.map((ele) => {
                            return (
                                <div className={Result.CorectBorderpar}>
                                    <div className={Result.CorectBorder2} >{ele}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}
export default ShowResults
