import { Link } from "react-router-dom"
const NotFound =()=>{
    return(
        <section className="max-w-[1280px] mx-auto">
            <figure className="h-screen text-center">
                <img src="./images/notfound.png" alt="" className="mx-auto h-3/4" />
                <figcaption>
                    <Link to="/" className="text-2xl font-bold hover:text-green transition-all">Go to Home</Link>
                </figcaption>
            </figure>
        </section>
    )
}
export default NotFound