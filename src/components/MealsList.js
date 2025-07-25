import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {

    // Access the meals from the context
    const { meals } = useMealsListContext();

    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (
                <h2 key={index} class="meal-box">{meal}</h2>
            ))}
        </div>
    );
};

export default MealsList;
// This component uses the useMealsListContext hook to access the meals from the context
// and displays them in a list format. Each meal is rendered as an <h2> element with a unique key based on its index in the array.
// The meals are provided by the MealsProvider component, which is wrapped around the MealsList component   
