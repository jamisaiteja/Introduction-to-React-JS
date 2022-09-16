//   const rootElement = document.getElementById("root");
//   const element = document.createElement("h1");
//   element.textContent = "Hello World!";
//   element.classList.add("greeting");
//   rootElement.appendChild(element);

//   const elementType = "h1";
//   const elementProps = { className: "greeting", children: "Hello World!" };
//   const element = React.createElement(elementType, elementProps);

//   const className = "greeting";
//   //   const name = "Sai teja";

//   const fullName = (user) => user.firstName + " " + user.lastName;
//   const user = { firstName: "Jami", lastName: "Sai teja" };
//   const element = <h1 className={className}>Hello {fullName(user)}!</h1>;

const element = (
  <div>
    <h1 className="greeting"> Hello there!</h1>
    <p>Good to see you!</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
