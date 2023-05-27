import React from "react";

const TableView = ({ data }) => {
    let headings
    if (data.length > 0) {
        headings = Object.keys(data[0])
    }
    return (
        <>
            {data.length > 0 && <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                    {headings.map((heading) => (
                        <th>{heading}</th>
                    ))}
                    </tr>
                    
                </thead>
                <tbody>
                    {data.map((item,index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.occupation}</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>}

        </>
    )
}

export default TableView