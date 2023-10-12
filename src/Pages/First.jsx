import React, { useEffect, useState } from "react";
import Sixpair from "../Sixpair"
import "../index.css";


function First() {
    const [data, setData] = useState();

    const getData = () => {
        fetch('./json/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((myjson) => {
            setData(myjson)
        })
    }

    useEffect(() => {
        getData()
        // console.log(data.data[0])
    }, [])
    return (
        <>
            <div className='container'>
                {
                    (data && data.length > 0) && data.map((val) => {
                        return (<Sixpair img={val.image} title={val.title} dis="It's one of mu favourite cars." />)
                    })
                }



            </div>


        </>
    )
}
export default First;