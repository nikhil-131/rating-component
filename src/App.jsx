import { useState } from 'react'
import star from "./assets/images/star.svg"
import final from "./assets/images/final.svg"

function App() {
  const [selectedButton, setSelectedButton] = useState(null)
  let [thankYou, setThankYou] = useState(false)
  
  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber===selectedButton?null:buttonNumber);
  }

  return (
    <>
      {((!thankYou) && <div className="container rounded-3xl w-96 h-96 absolute bg-gradient-to-b from-[#242834] to-[#171E28] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="main my-8 mx-6">
          <div className="logo rounded-full bg-[#262F38] w-fit p-3">
            <img src={star} alt="star icon" />
          </div>
          <div className="content">
            <h1 className='text-white text-2xl mt-6 font-bold'>How did we do?</h1>
            <p className='text-sm text-[#8c9096] my-2'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>
          <div className="buttons">
            <div className="feedback flex justify-between text-lg text-[#8c9096] my-8 font-semibold">
              {[1, 2, 3, 4, 5].map((buttonNumber) => {
              return <button onClick={() => handleButtonClick(buttonNumber)} key={buttonNumber} className={`one rounded-[50%] ${buttonNumber===selectedButton?"bg-[#7E8A9A] text-white":"bg-[#262F38]"} w-fit p-3 px-5 hover:bg-white hover:text-[#FC7613]`}>{buttonNumber}</button>
              })}
            </div>
            <button onClick={() => setThankYou(thankYou = true)} type="submit" className='bg-[#FC7613] w-full rounded-full py-2 text-white hover:bg-white hover:text-[#FC7613]'>SUBMIT</button>
          </div>
        </div>
      </div>)}

      {thankYou && <div className="thankContainer rounded-3xl w-96 h-96 absolute bg-gradient-to-b from-[#242834] to-[#171E28] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="thankMain flex flex-col my-8 mx-6 justify-center">
              <div className="thankImage flex justify-center">
              <img src={final} alt="thank you" />
              </div>
              <div className="thankContent text-center">
                <p className='mx-auto my-8 px-4 py-1 bg-[#273039] text-[#FE7612] w-fit rounded-full text-sm'>You selected {selectedButton} out of 5</p>
                <h1 className='text-white text-3xl'>Thank You!</h1>
                <p className='text-[15px] text-[#8c9096] my-4'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
              </div>
        </div>
      </div>}
    </>
  )
}

export default App
