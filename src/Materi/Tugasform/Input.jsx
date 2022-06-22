const Input = ({label, type, name, onChange}) => {
    return (
        <div style={{marginTop: '10px'}}>
           <label > {label} : </label>
           <br />
           <input style={{marginTop: '10px'}} type={type}  name={name} onChange={e => onChange(e.target.value)}/> 
           <br />
        </div>
    )
}

export default Input;