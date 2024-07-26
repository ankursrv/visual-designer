import { useState } from "react";
import Button from "../Button"

import ToastMessage from '../ToastMessage';

const socialIcon = ['discord.svg', 'facebook.svg', 'dribble.svg', 'insta.svg', 'behance.svg']

const Footer = () => {
   
   

    const [toasts, setToasts] = useState([]);

    const showToast = (message) => {
      const id = Date.now(); // Generate a unique ID for the new toast
      setToasts([...toasts, { id, message }]); // Add the new toast to the state
      setTimeout(() => removeToast(id), 3000); // Auto-remove after 3 seconds
    };
  
    const removeToast = (id) => {
      setToasts(toasts.filter(toast => toast.id !== id)); // Remove the toast with the matching ID
    };

    const submit = (e) => {
        e.preventDefault();
        showToast('Form submitted successfully!');
    }

    return (
        <footer class=" max-w-[1280px] mx-auto px-6 lg:px-6 my-[84px]" id="footer">
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
                                <img key={index} src={`./images/${icon}`} alt="social icon image" />
                            ))
                        }
                    </figure>
                </div>
                <form onSubmit={submit} className="flex flex-col gap-3 md:w-[520px] md:ml-auto">
                    <input type="text" placeholder="Name" className="py-4 px-6 bg-grayLight placeholder:text-black placeholder:text-[17px]" />
                    <input type="email" placeholder="Email" className="py-4 px-6 bg-grayLight placeholder:text-black placeholder:text-[17px]" />
                    <Button type="submit" btnText='Submit' style="py-6 px-16 bg-black text-white font-semibold text-xl mt-3 w-fit" />

                    {/* ToasMessage Component Start  */}
                    <div className="">
                        {
                            toasts.map((toast)=>(
                                <ToastMessage 
                                key={toast.id}
                                message={toast.message}
                                onClose={()=>removeToast(toast.id)}
                                />
                            ))
                        }
                    </div>
                    {/* ToasMessage Component End  */}

                </form>
            </div>
        </footer>
    )
}
export default Footer