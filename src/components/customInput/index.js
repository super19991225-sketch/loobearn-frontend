import "./input.scss"

export const CustomInput = (props) => {
    const { name, type, onChange } = props;
    return (
        <div className="custom-input">
            <input name={name} type={type} onChange={onChange} />
        </div>
    )
}