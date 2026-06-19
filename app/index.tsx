import Home from "@/app/(root)/home";
import { store } from "@/scripts/storage";
import { TESTING_DLIST, TESTING_OLIST } from "@/scripts/testing_data";

export default function App () {
    store('ovelhas', JSON.stringify(TESTING_OLIST));
    store('tasks', JSON.stringify(TESTING_DLIST));
    //DEV: (Remove before flight)
    
    return (
        <Home></Home>
    );
}