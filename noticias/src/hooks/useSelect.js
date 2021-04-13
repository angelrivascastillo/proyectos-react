import { useState } from "react"

const useSelect = (initialState, options) => {
    const [state, setState] = useState(initialState)

    const Select = () => (
        <select name="" id="" className='browser-default' value={state}
            onChange={(e) => setState(e.target.value)}
        >
            {
                options.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>

                ))
            }
        </select>
    )
    return [state, Select]

}

export default useSelect