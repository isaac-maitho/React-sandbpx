import { useRef } from "react"
function UseRefExample1() {
    const inputRef = useRef()
    const divRef = useRef()
    const onSubmit =(e) =>{
        e.preventDefault()
        //Useref will always give you an object
        console.log(inputRef.current.value)
        inputRef.current.value = 'enter name'
        inputRef.current.style.backgroundColor = 'indigo'
        divRef.current.innerText = 'Goodbye'
    }
  return (
    <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} id="name" className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Submit</button>
        <div onClick={() => inputRef.current.focus()} ref={divRef}>Hello</div>
    </form>
  )
}

export default UseRefExample1