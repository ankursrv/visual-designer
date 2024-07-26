import { useState } from "react"


const recipes = [
    {
        id: 716429,
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        image: "./images/logo.webp",
        dishTypes: [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        recipe: {
            // recipe data
        }
    }

]



function About() {
    const [open, setOpen] = useState(false)
    return (
        <>
            {
                recipes.map((recipeItem, index) => (
                    <div key={index}>
                        <h1>{recipeItem.id}</h1>
                        <p>{recipeItem.title}</p>
                        <p onClick={() => setOpen(true)} className="flex items-center">      {/***** //MOdal *****/}
                            <img src={recipeItem.image} className="w-24" />
                            <h2 className="text-5xl font-bold">MODAL</h2>
                        </p>
                        {
                            recipeItem.dishTypes.map((dish, index) => (
                                <h3 key={index}>{dish}</h3>
                            ))
                        }
                    </div>
                ))
            }

            {/* MOdal Start */}
            {
                open && (

                    <div className="flex items-center justify-center h-full">
                        <div className="absolute w-full h-full bg-black top-0 left-auto opacity-60"></div>
                        <div className="absolute z-50  bg-white w-2/6 top-2/4 -translate-y-2/4">
                            <button className="bg-green text-3xl w-12 h-12 pb-2 ml-auto block" onClick={() => setOpen(false)}>×</button>
                            <div className="p-5">
                                <h1>Modal </h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* MOdal END  */}



        </>
    )
}
export default About
