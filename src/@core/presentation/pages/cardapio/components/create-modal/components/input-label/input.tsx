import type { InputProps } from "./interface";

export default function Input({label, value, updateValue}: InputProps){
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={e => updateValue(e.target.value)}/>
    </>
  )
}
