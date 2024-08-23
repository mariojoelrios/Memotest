import { Cards } from "../Cards/Card"
import "./Grid.css"
import data from "../dis.json"

export function Grid() {
    const createMazoMescldo = () => {
       return data.concat(data)
    }

    console.log(createMazoMescldo())
    return (
        <>
            <div className="grid-memotest">
               
            </div>
        </>
    )
}