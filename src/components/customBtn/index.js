import "./button.scss"

export const CustomBtn = (props) => {
    const {value, onClick} = props;
    return (
        <div className="custom-btn">
            <input type={"button"} value={value} onClick={onClick}/>
        </div>
    )
}