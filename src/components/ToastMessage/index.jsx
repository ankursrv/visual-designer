const ToastMessage =({message, onClose})=>{
    return(
        <div className="max-w-80 flex px-6 py-5 rounded-lg shadow-2xl bg-redLight fixed top-4 right-36 z-50 border-b-4 border-green">
            <h4>{message}</h4>
            <button onClick={onClose} className="ml-auto pl-4 text-sm">✖</button>
        </div>
    )
}
export default ToastMessage