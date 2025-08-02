import Bar from "./Bar"
import Dashboard from "./Dashboard"

function SlideBar(props){
    return <div className="bg-[#557a46] w-56 h-[90vh] text-white shadow-sm">
        <Bar bar="fa-solid fa-bars text-3xl ml-44 mt-2"/>
        <Dashboard icon1="fa-solid fa-box text-2xl" name="Dashboard"/>
        <Dashboard icon1="fa-brands fa-product-hunt text-2xl" name="Product"/>
        <Dashboard icon1="fa-solid fa-hospital text-2xl" name="Service"/>
        <Dashboard icon1="fa-solid fa-person-breastfeeding text-2xl" name="Parent"/>
        <Dashboard icon1="fa-solid fa-calendar-days text-2xl" name="Attendance"/>
        <Dashboard icon1="fa-solid fa-headphones text-2xl" name="Help"/>
    </div>
}

export default SlideBar
