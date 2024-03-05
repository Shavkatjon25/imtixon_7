import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Omborchi from "./Omborchi";



function Spw() { 
  const { maxsulotSoni, modal }=useSelector(a=>a)
  const dicpach=useDispatch();
  function Ochirish(){
    dicpach(Omborchi.actions.Mod())
    dicpach(Omborchi.actions.ochr())
  }
  return (
    <div className="mt-[25px]">
      
      <div className={`absolute h-[256px] w-[95%] bg-white shdw  m-2 rounded-[10px] z-50 lg:w-[360px] right-0 lg:top-20 lg:right-24 ${ !modal ? 'hidden': 'block animesh'}`}>
        <div className="p-6 pb-[27px] border-b-[1px]">
          <h2 className="modalCart">Cart</h2>
        </div>
          { maxsulotSoni==0 ? <div><h3 className="null mt-[77px]">Your cart is empty.</h3></div>:        <div className="p-6">
          <div className="flex gap-4">
            <img src="./birr.png" alt="" className="h-[50px] w-[50px]"/>
            <div>
              <h4 className="fall">Fall Limited Edition Sneakers</h4>
              <p className="fall">$125.00 x { maxsulotSoni} <span className="text-[#1D2026] font-bold">${125* maxsulotSoni}.00</span></p>
            </div>
          </div>
          <button className="add w-full bg-[#FF7E1B] h-[56px] hover:bg-[#FFAB6A] rounded-[10px] mt-[26px] cursor-pointer" onClick={Ochirish}>Checkout</button>
        </div>}
      </div>



      <div className="lg:hidden">
      <swiper-container  loop           navigation-next-el=".custom-next-button"
            navigation-prev-el=".custom-prev-button"
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "16px",
      }}
      >
        <swiper-slide>
            <img src="birr.png" alt="" className="w-full h-[300px] md:h-[400px]" />
        </swiper-slide>
        <swiper-slide> <img src="img2.jpg" alt="" className="w-full h-[300px] md:h-[400px]" /></swiper-slide>
        <swiper-slide> <img src="img6.jpg" alt="" className="w-full h-[300px] md:h-[400px]" /></swiper-slide>
        <swiper-slide> <img src="img4.jpg" alt="" className="w-full h-[300px] md:h-[400px]" /></swiper-slide>
        
        </swiper-container>
      </div>
      <div className="nav-btn custom-prev-button lg:hidden">
           <img src="./chap.svg" alt="" />
        </div>
        <div className="nav-btn custom-next-button lg:hidden">
        <img src="./ong.svg" alt="" />
        </div>
    </div>
  )
}

export default Spw