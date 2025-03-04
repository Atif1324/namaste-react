const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, "I am h1 tag"),
  React.createElement("div", { id: "child2" }, "I am h1 tag"),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
