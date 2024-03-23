import React,{useState} from 'react'

function InputRow({ text, fxn, params, setisLoading }) {
  const [Param1, setParam1] = useState(null)
  const [Param2, setParam2] = useState(null)
  const buttonStyle = "button-64 flex items-center justify-center border-0 rounded-lg shadow-md font-sans text-white text-xl py-3 px-4 bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-400 hover:bg-none hover:ring hover:ring-offset-2 hover:ring-purple-600 focus:outline-none focus:ring focus:ring-purple-600 focus:ring-offset-2 focus:ring-opacity-50"
  const spanStyle = "bg-blue-800 rounded-lg px-6 py-4 transition duration-300"
  const validator = () => {
    if (params.length == 2 && (Param2 == null || Param1 == null || Param1==""|| Param2=="")) return false;
    if (params.length == 1 && (Param1 == null || Param1 == "")) return false;
    return true;
  }
  const handleClick = async () => {
    if (!validator()) return alert("Please fill all the fields")
    setisLoading(true)
    try {
      if (params.length == 2) await fxn(params[0].convertor(Param1), params[1].convertor(Param2));
      else if (params.length == 1) await fxn(params[0].convertor(Param1));
      else await fxn()
    } catch (error) {
      console.log('Error: ', error)
      alert("something went wrong try again later")
    }
    setisLoading(false)
  }
  if (params.length == 2)
    return (
      <tr>
        <td>
          <input onChange={(e) => setParam1(e.target.value)} placeholder={params[0].name}></input>
        </td>
        <td>
          <input onChange={(e) => setParam2(e.target.value)} placeholder={params[1].name}></input>
        </td>
        <td>
          <button class={buttonStyle} role="button" onClick={handleClick}>
            <span class={spanStyle}>{text}</span>
          </button>
        </td>
      </tr>
    )
  else if (params.length == 1) return (
    <tr>
      <td></td>
      <td>
        <input onChange={(e) => setParam1(e.target.value)} placeholder={params[0].name}></input>
      </td>
      <td>
        <button class={buttonStyle} role="button" onClick={handleClick}>
          <span class={spanStyle}>{text}</span>
        </button>
      </td>
    </tr>
  )
  else return (
    <tr>
      <td></td>
      <td></td>
      <td>
        <button class={buttonStyle} role="button" onClick={handleClick}>
          <span class={spanStyle}>{text}</span>
        </button>
      </td>
    </tr>
  )
}

export default InputRow