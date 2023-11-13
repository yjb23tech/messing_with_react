import { createRoot } from 'react-dom/client'; 

function NavigationBar() {

    return <h1>Hello Even Newer World!</h1>
}

const root = createRoot(document.getElementById('navigation'));
root.render(<NavigationBar />);

