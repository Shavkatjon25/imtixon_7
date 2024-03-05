import Header from "./Header"
import Mainn from "./Mainn"
import Sinov from "./Sinov"
import Spw from "./Spw"


function App() {
  return (
    <div className="lg:px-[165px] lg:pb-5">
        <Header/>
        <div className="lg:flex lg:gap-[8.6%]">
        <Sinov/>
        <Spw/>
        <Mainn/>
        </div>
    </div>
  )
}

export default App