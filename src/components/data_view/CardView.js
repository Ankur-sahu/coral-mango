import React from "react";
import avatar from "../../assets/images/avatar.png"
const CardView =({data})=>{
    return(
        <>
            <div className="card-container">
                {data.length>0 && <>
                    {data.map((item)=>(
                        <div className="display-col">
                            <img src={avatar} alt="Avatar" />
                            <h3>{item.name}</h3>
                            <h4>{item.occupation}</h4>
                            <h5>{item.age} Years</h5>
                        </div>
                    ))}
                </>}
            </div>
        </>
    )
}

export default CardView