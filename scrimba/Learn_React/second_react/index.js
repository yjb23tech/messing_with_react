const App = () => {

    return React.createElement("div", {}, [
        React.createElement("li", {}, "Prometheus Risen."), 
        React.createElement("li", {}, "Apotheosis"), 
        React.createElement("li", {}, "Los Blancos")]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));


