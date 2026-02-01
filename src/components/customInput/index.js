

export const CustomInput = (props) => {
    const {name, type, onChange} = props;
    return (
        <input name={name} type={type} onChange={onChange}/>
    )
}