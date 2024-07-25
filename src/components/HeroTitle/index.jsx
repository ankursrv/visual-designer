import { Link } from "react-router-dom"
import Button from "../Button"
const HeroTitle = ({ title, heading, paragraph, image }) => {

    const scrollToSection = () => {
        document.getElementById("testimonial").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <div className='max-w-[620px] mt-4'>
                <small className='font-semibold md:text-xl text-lg mb-6 block'>{title}</small>
                <h1 className='font-semibold md:text-[68px] text-4xl mb-6 leading-none'>{heading}</h1>
                <p className='md:text-[17px] text-lg font-normal leading-7 pr-32'>{paragraph}</p>

                <Button btnText="Contact" style="py-6 px-16 bg-black text-white font-semibold text-xl mt-12" onClick={scrollToSection} />

            </div>
            <div className='max-w-[480px]'>
                <img src={image} alt="designer image" />
            </div>
        </>
    )
}
export default HeroTitle

