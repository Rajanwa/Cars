import React from "react";
import Sixpair from "../Sixpair"


function Second() {
    return (
        <>
            <div className='container d-flex justify-content-around'>
                <Sixpair img="" title="{data[6].name}" dis="It's one of mu favourite cars." />
                <Sixpair img="" title="{data[7].name}" dis="It's one of mu favourite cars." />
                <Sixpair img="" title="{data[8].name}" dis="It's one of mu favourite cars." />
            </div>

            <div className='container d-flex justify-content-around'>
                <Sixpair img="" title="{data[9].name}" dis="It's one of mu favourite cars." />
                <Sixpair img="" title="{data[10].name}" dis="It's one of mu favourite cars." />
                <Sixpair img="" title="{data[11].name}" dis="It's one of mu favourite cars." />
            </div>

        </>
    )
}
export default Second;