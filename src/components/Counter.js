import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => { 
    // Access the meals from the context
    const { meals } = useMealsListContext();
    // Display the number of meals
    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    );
};

export default Counter;
// This component uses the useMealsListContext hook to access the meals from the context 