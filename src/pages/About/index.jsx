

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
    return (
        <>
            {
                recipes.map((recipeItem, index) => (
                    <div>
                        <h1>{recipeItem.id}</h1>
                        <p>{recipeItem.title}</p>
                        <p><img src={recipeItem.image} /></p>
                        {
                            recipeItem.dishTypes.map((dish, index) => (
                                <h3>{dish}</h3>
                            ))
                        }
                    </div>
                ))
            }

            <div className="mt-12">
            <h1 className="mt-9 text-5xl text-bold">margin top</h1>
            </div>
        </>
    )
}
export default About
