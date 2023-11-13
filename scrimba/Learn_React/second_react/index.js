const App = () => {

    return React.createElement("div", {}, React.createElement("h3", {}, "Prometheus Rising"));

};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

