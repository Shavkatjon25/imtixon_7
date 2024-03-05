import { useDispatch, useSelector } from "react-redux"
import Omborchi from "./Omborchi";
import { useState } from "react";


function Header() {
    const {mobil, modal, maxsulotSoni}=useSelector(a=>a);
    const [count, setCount]=useState(1)
    const dispach=useDispatch();

    function MobilModal(){
            dispach(Omborchi.actions.Mob())
    }
    function Modal(){
        dispach(Omborchi.actions.Mod())
}

  return (

    <div className=" pb-[34px] lg:border-b-[1px] lg:mb-[90px]">

        <div className={`modal fixed w-full h-full z-20 ${mobil ? 'block animeshn' : 'hidden'}`}>
            <div className="w-[66%] bg-white h-full pl-[25px] flex flex-col gap-5 pt-[92px]">
                <h2 className="modal_h2"> Collections</h2>
                <h2 className="modal_h2"> Men</h2>
                <h2 className="modal_h2"> Women</h2>
                <h2 className="modal_h2"> About</h2>
                <h2 className="modal_h2"> Contact</h2>
            </div>
        </div>

    <div className="flex justify-between pt-5 px-6">

        
 

        <div className="flex gap-4 items-center lg:gap-[56px] ">

            <div className={`flex flex-col gap-[3px] md:hidden z-20 ${mobil? 'gap-0 animeshn fixed':''}`} onClick={MobilModal}>
                <div className={`w-4 h-[3px] bg-black ${mobil? 'rotate-45 h-[2px] absolute w-5':''}`}></div>
                <div className={`w-4 h-[3px] bg-black ${mobil ? 'hidden':''}`}></div>
                <div className={`w-4 h-[3px] bg-black ${mobil? 'rotate-[-45deg] h-[2px] absolute w-5':''}`}></div>
            </div>
            <div className="lg:h-5 flex">
                <img src="./logos.svg" alt="" className="lg:h-5" />
            </div>
            <div className="hidden md:flex gap-8 items-center aftr">
                <h3 className="header-des cursor-pointer">Collections</h3>
                <h3 className="header-des cursor-pointer">Men</h3>
                <h3 className="header-des cursor-pointer">Women</h3>
                <h3 className="header-des cursor-pointer">About</h3>
                <h3 className="header-des cursor-pointer" >Contact</h3>
            </div>
        </div>


        <div className="flex gap-[22px] items-center lg:gap-[46px]">
            <div  onClick={Modal} className='cursor-pointer'>
                <div className={`w-[19px]  h-[13px] text-[10px] text-center ml-[10px] mt-[-5px] text-white bg-[#FF7E1B] rounded-md absolute ${maxsulotSoni == 0 ? 'hidden':''}`}> {maxsulotSoni}</div>
                <img src="./savat.svg" alt="" />
            </div>
            <div className='cursor-pointer'>
                <img src="./Oval.svg" alt="" className="lg:w-[50px] " />
            </div>

        </div>

        </div>
    </div>
  )
}

export default Header