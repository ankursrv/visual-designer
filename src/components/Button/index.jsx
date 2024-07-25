const Button =({btnText,style, onClick})=>{
    return(
        <button className={style} onClick={onClick}>{btnText}</button>
    )
}
export default Button