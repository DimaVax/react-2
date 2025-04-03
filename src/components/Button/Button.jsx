export const Button = ( {onClick} ) => {
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("btn")){
            onClick()
        }
    })
    return <button className="btn">Перевірити чи царєвни тут😨</button>

}