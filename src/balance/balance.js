import { useState } from "react"


export function Balance() {

    const [bal, setBal] = useState(0)

    const onBalance = (e) => {
        e.preventDefault()

        const acId = e.target.acId.value

        console.log(`Id ${acId} `)

        fetch(`http://localhost:3004/balance/${acId}`)
        .then( res => res.json() )
        .then(json => setBal(json.bal))
    }

    return (
        <div className="balance">
            <h1> Balance Is : INR. {bal} </h1>
            <form onSubmit={onBalance}>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='submit' value='Balance' />
            </form>
        </div>
    )
}