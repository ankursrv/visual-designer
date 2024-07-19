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
    const [open, setOpen] = useState(true)
    return (
        <>
            {
                recipes.map((recipeItem, index) => (
                    <div>
                        <h1>{recipeItem.id}</h1>
                        <p>{recipeItem.title}</p>
                        <p><img src={recipeItem.image} className="w-8" /></p>
                        {
                            recipeItem.dishTypes.map((dish, index) => (
                                <h3>{dish}</h3>
                            ))
                        }
                    </div>
                ))
            }

            {/* MOdal Start */}
            <div className="">
            <div className="absolute w-full h-full bg-green top-0 left-auto"></div>

            </div>
            {/* MOdal END  */}


        </>
    )
}
export default About
