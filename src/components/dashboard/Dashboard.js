import React, { useEffect, useState } from "react"
import { getUserData } from "../../utils/auth/Auth"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Input from "../common/Input";
import Button from "../common/Button";
import TableView from "../data_view/TableView";
import CardView from "../data_view/CardView";
import { shortIt } from "../../utils/short";
import { searchIt } from "../../utils/search";

const Dashboard = () => {
    const [searchInput, setSearchInput] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [tableView, setTableView] = useState(true)
    const [user, setUser] = useState([])
    // Fetch user data from localStorage or state
    // Example: const userData = JSON.parse(localStorage.getItem('login'));
    const navigate = useNavigate()
    const fetchData = async () => {
        const response = await axios("https://coralmango.com/api/react-test")
        setUser(response.data)
    }
    const searchData = ()=>{
        setErrMsg("")
        if(!searchInput){
            setErrMsg("Input required!")
            return
        }
        setUser(searchIt(user,searchInput))
        setSearchInput("")
    }

    useEffect(() => {
        if (!getUserData()) {
            navigate('/')
        }
        fetchData()
    }, [])
    return (
        <>
            <main className="dashboard-page">
                <div className="display-col dashboard">
                    <div className="filter-tools">
                        <div className="display-row filter-btns">
                            <div>Short By :</div>
                            <Button onClick={()=>setUser(shortIt(user,"name"))}>Name</Button>
                            <Button onClick={()=>setUser(shortIt(user,"age"))}>Age</Button>
                        </div>
                        <div>
                            <Input
                                type="text"
                                label="Search"
                                onChange={(e) => setSearchInput(e.target.value)}
                                name="search"
                                value={searchInput}
                                errMsg={errMsg}
                            />
                            <Button onClick={()=>searchData()}>Search</Button>
                        </div>
                    </div>
                    <div className="switch">
                        <Button onClick={() => setTableView(!tableView)} >{tableView ? "Card View" : "Table View"}</Button>
                    </div>
                    <div className="display-row view-data">
                        {tableView ? <TableView data={user} /> : <CardView data={user} />}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard