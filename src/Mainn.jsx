import { useDispatch, useSelector } from "react-redux"
import Omborchi from "./Omborchi";


function Mainn() {

    const{maxsulotSoni, Soni}=useSelector(a=>a)

const dicpach=useDispatch();
function SavatgaOlish(){
    dicpach(Omborchi.actions.maxSoni(Soni))
}
function Ayru(){
    dicpach(Omborchi.actions.Soni(-1))
}
function Qoshu(){
    dicpach(Omborchi.actions.Soni(1))
}


  return (
    <div className="p-6 lg:w-[445px] lg:p-0 lg:flex lg:flex-col lg:h-[565px] lg:justify-center">


        <div>
            <h3 className="main_1">Sneaker Company</h3>
            <h2 className="main_2 mt-[19px] mb-[15px] lg:text-[44px] lg:leading-[48px]">Fall Limited Edition Sneakers</h2>
            <p className="main_3 lg:yext-[16px] lg:leading-[26px]">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>


        <div className="flex justify-between mt-6 md:justify-start md:gap-5  items-center lg:flex-col lg:items-start">
            <div className="flex gap-4 items-center">
                <h2 className="b125">$125,00</h2>
                <button className="b50 w-[51px] h-[27px] rounded-[6px]">50%</button>
            </div>
            <div>
                <h3 className="b250">$250,00</h3>
            </div>
        </div>

        <div className="mt-6 flex gap-4 flex-col lg:flex-row lg:flex-wrap md:flex-row ">
            <div className="flex w-full justify-between items-center px-6 bg-[#F6F8FD] h-[56px] rounded-[10px] lg:flex-1">
                <button className="text-[2rem] font-bold text-[#FF7E1B] cursor-pointer" onClick={Ayru}>-</button>
                <p className='font-bold text-[1rem]'>{Soni}</p>
                <button className="text-[2rem] font-bold text-[#FF7E1B] cursor-pointer" onClick={Qoshu}>+</button>
            </div>
            <div className="flex w-full justify-center gap-4 items-center px-6 bg-[#Ff7e1b] hover:bg-[#FFAB6A] cursor-pointer  h-[56px] rounded-[10px] lg:w-[272px] lg:p-0" onClick={SavatgaOlish}> 
                <div>
                    <img src="./savatt.svg" alt="" />
                </div>
                <h3 className="add  ">Add to cart</h3>
            </div>
        </div>


    </div>
  )
}

export default Mainn