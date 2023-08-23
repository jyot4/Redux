import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTable } from './TableSlice'


function Table() {


    const dispatch = useDispatch()
    const select = useSelector((state) => {
        return state.TableStore
    })
    console.log(select.tableValue)
    return (
        <div>
            <button onClick={() => dispatch(handleTable())}></button>
            <table>
                <tr>
                    <th>2 Table</th>
                    {
                        select.tableValue.map((tableCount) => {
                            return <tr>{tableCount}</tr>
                        })
                    }
                </tr>

            </table>
        </div>
    )
}

export default Table
