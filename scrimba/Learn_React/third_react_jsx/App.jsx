import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <h1>London Zoo</h1>
            <Pet name="Luna" animal="dog" breed="Havanese" />
            <Pet name="Pepper" animal="bird" breed="Hawk" />
            <Pet name="Nikolai" animal="cat" breed="Mongrel" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

