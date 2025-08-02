import Courses from "./Courses"
import SlideBar from "./SlideBar"

function App(){
  return <div>
    <div className="flex gap-10">
    <SlideBar/>
    <div className="flex gap-10 mt-10">
    <Courses color="bg-[#ff7f50] w-56 h-28 pt-10 pl-7 rounded-md" Course="Courses"/>
    <Courses color="bg-[#87ceea] w-56 h-28 pt-10 pl-7 rounded-md" Course="Employee"/>
    <Courses color="bg-[#fea500] w-56 h-28 pt-10 pl-7 rounded-md" Course="Classes"/>
    </div>
     
    </div>
   
    

  </div>
}

export default App