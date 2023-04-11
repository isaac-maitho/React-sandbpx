import { useState, useRef, useMemo, useEffect } from "react"
function UseMemoExample() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    //const sqrt = getsqrt(number)
    const sqrt = useMemo(() =>getsqrt(number), [number])

    const renders = useRef(1)

    useEffect(() =>{
        renders.current = renders.current +1 
    })
    const onClick = () =>{
        setInc((prevState) => {
            console.log(prevState +1)
            return prevState +1
        })
    }
  return (
    <div>
        <input 
          type="number" 
          value={number} 
          onChange={(e) =>setNumber(e.target.value)} 
          className="form-control w-25" />

          <h3 className="my-3"> The sqrt of {number} is {sqrt}</h3>
        <button onClick={onClick} className="btn btn-primary">Re Render</button>
        <h3>Render: {renders.current}</h3>
    </div>
  )
}

function getsqrt(n){
    for(let i=0; i<=1000; i++){
        console.log(i)
    }
    console.log('Expensive function called')
    return Math.sqrt(n)
}
export default UseMemoExample