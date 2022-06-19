import React, { useState } from 'react'
import Navbar from './Navbar'
import Homes from "../../src/Styles/Homes.module.css"
import { demandsFromUser, UserContentsDemand } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import TypingShow from './TypingShow'
const Home = () => {
    const dispatch = useDispatch()
    
    const words100 = "One of the most faithful and helpful animals on the earth is a dog. Dogs consist of four feet for running and jumping. They have two eyes, ears, and one tail, which makes them look beautiful. The stunning look of a dog also consists of one major part that is sharp teeth. Dogs can run very fast. Thus, they can help you to exercise more. They can eat large amounts of meat, milk, green vegetables, fruits, rice, fish, and many other things. Yet, all the sweet items are harmful to the health of dogs. Dogs are knowledgeable pets. Thus, they keep a quick watch on the people at night. Many military and police workers use trained dogs for catching thieves and criminals. The smelling power of dogs is mighty and strong. Thus, they can sense things from far after they smell them once. Dogs consist of very friendly and over protecting nature"
    const words300 = "Of the standard fonts used in essays and other documents, Verdana will create the most pages. On average, Verdana will create 1.1 pages for every 1 page written using Arial and 0.9 pages for every page written with Times New Roman or Calibri in Microsoft Word or Google Docs. These are just estimates . If you're looking to write the fewest number of words for your school assignment to meet a page count, we recommend using Verdana (if allowed) or Arial. A good rule of thumb is to use Arial font unless your teacher provides different guidelines for font or spacing."
    let wordss100 = words100.split(" ")
    let wordss300 = words300.split(" ")
    const demand = useSelector((store) => store.typing.demandUser)
    console.log('demand secontes', demand);
    const [Paragraphs, setParagraphs] = useState({ paragraghsName: "", timing: "" })
    const handleChooseTyping = (e) => {
        const { name, value } = e.target
        setParagraphs({ ...Paragraphs, [name]: value })
    }
    const handleSubmitTyping = () => {
        console.log('Paragraphs.paragraghsName submit', typeof(Paragraphs.paragraghsName));
        if (Paragraphs.paragraghsName == "100") {
            dispatch(UserContentsDemand(wordss100))
        }
        else if (Paragraphs.paragraghsName == "300") {
            dispatch(UserContentsDemand(wordss300))
        }
        dispatch(demandsFromUser(Paragraphs))
    }
    return (
        <div className={Homes.ParentContainer}>
            <div className={Homes.ParentContainerNavbar} >
                <Navbar></Navbar>
            </div>
            <div className={Homes.ParentContainerContents}>
                <div className={Homes.LeftSideBar}>
                    <div className={Homes.LeftSideBarContents}>
                        <div className={Homes.LeftSideBarContentsChoose}>
                            <select name="paragraghsName" onChange={handleChooseTyping} className={Homes.LeftSideBarContentsChooseSelect}>
                                <option  >Paragraph Selection</option>
                                <option value="100" >100 Words</option>
                                <option value="300" >300 Words</option>
                                <option value="500" >500 Words</option>
                            </select>
                        </div>
                        <div className={Homes.LeftSideBarContentsChoose}>
                            <select name="timing" onChange={handleChooseTyping} className={Homes.LeftSideBarContentsChooseSelect}>
                                <option >Select Time</option>
                                <option value="1"> 1 Min </option>
                                <option value="3"> 3 Min </option>
                                <option value="5"> 5 Min </option>
                            </select>
                        </div>
                        <div className={Homes.LeftSideBarContentsChoose}>
                            <button onClick={handleSubmitTyping} className={Homes.LeftSideBarContentsChooseSelectBtn}>
                                Start Typing..
                            </button>
                        </div>
                    </div>
                </div>
                <div className={Homes.RightSideBar}>
                    <TypingShow></TypingShow>
                </div>
            </div>
        </div>
    )
}
export default Home
