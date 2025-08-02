function Dashboard(props){
    return <div>
        <div className="flex gap-3 ml-7 mb-3 mt-7">
            <i class={props.icon1}></i>
            <h2 className="texl-4xl font-bold">{props.name}</h2>
        </div>

    </div>
}

export default Dashboard