import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../Button"

const Footer = () => {
    const submit = (e) => {
        e.preventDefault();
        toast.success("You are successfully logged in");
    }
    const socialIcon = [
        './images/discord.svg',
        './images/facebook.svg',
        './images/dribble.svg',
        './images/insta.svg',
        './images/behance.svg'
    ]
    return (
        <footer class=" max-w-[1280px] mx-auto px-6 lg:px-6 my-[84px]">
            <h2 className="text-[32px] font-semibold text-black leading-[42px]">Lets work together</h2>
            <div className="grid md:grid-cols-2 mt-6">
                <div>
                    <p className="text-[17px] font-normal leading-[27px] w-4/5 mb-[42px]">
                        This is a template Figma file, turned into code using Anima.
                        Learn more at AnimaApp.com This is a template Figma file,
                        turned into code using Anima. Learn more at AnimaApp.com
                    </p>
                    <figure className="flex gap-6">
                        {
                            socialIcon.map((icon, index) => (
                                <img src={icon} alt="social icon image" />
                            ))
                        }
                    </figure>
                </div>
                <form onSubmit={submit} className="flex flex-col gap-3 md:w-[520px] md:ml-auto">
                    <input type="text" placeholder="Name" className="py-4 px-6 bg-grayLight placeholder:text-black placeholder:text-[17px]" />
                    <input type="email" placeholder="Email" required className="py-4 px-6 bg-grayLight placeholder:text-black placeholder:text-[17px]" />
                    <Button type="submit" btnText='Submit' style="py-6 px-16 bg-black text-white font-semibold text-xl mt-3 w-fit" />
                    <ToastContainer />
                </form>
            </div>
        </footer>
    )
}
export default Footer