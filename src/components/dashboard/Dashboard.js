import React, { useEffect, useState, useContext } from "react"
import { getUserData } from "../../utils/auth/Auth"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Input from "../common/Input";
import Button from "../common/Button";
import TableView from "../data_view/TableView";
import CardView from "../data_view/CardView";
import { shortIt } from "../../utils/short";
import { searchIt } from "../../utils/search"; 
import { tableContext } from "../../contexts/Context";

const Dashboard = () => {
    const {tableView} = useContext(tableContext);
    const [searchInput, setSearchInput] = useState("")
    const [allData, setAllData] = useState([])
    const [user, setUser] = useState([])
    const navigate = useNavigate()
    const fetchData = async () => {
        const response = await axios("https://coralmango.com/api/react-test")
        setAllData(response.data)
        setUser(response.data)
    }
    
    const searchData = (e) => {
        setSearchInput(e.target.value)
        setUser(searchIt(allData, e.target.value))
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
                            <Button onClick={() => setUser(shortIt(user, "name"))}>Name</Button>
                            <Button onClick={() => setUser(shortIt(user, "age"))}>Age</Button>
                        </div>
                        <div>
                            <Input
                                type="text"
                                onChange={(e) => searchData(e)}
                                name="search"
                                value={searchInput}
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="banner-container display-row">
                    {
                        searchInput.length>0 && <><div className="banner">
                            {user.length>0?"You are viewing filtered results!":"No record Found"}
                        </div></>
                        }
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