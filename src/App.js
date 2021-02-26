import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let myName = "dr mahafuz";
  let someObject = {
    name: "Ataur",
    age: 45,
  };
  let nayok = ["Rahim", "Korm", "Josim", "Ataur"];
  let products = [
    { name: "Adobe photoshop", price: "$99.99" },
    { name: "Adobe premiun", price: "$60.99" },
    { name: "Adobe ai", price: "$40.99" },
    { name: "Adobe something", price: "$20.99" },
  ];
  let style = {
    color: "red",
    backgroundColor: "green",
  };
  // const productNames = products.map((product) => product.name);
  // console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        {/* <p className="" style={style}>
          this is me {2 + 3}
        </p> */}
        {/* <Products name={products[0].name} price={products[0].price}></Products>
        <Products name={products[1].name} price={products[1].price}></Products>
        <Products name={products[2].name} price={products[2].price}></Products>
        <Products name={products[3].name} price={products[3].price}></Products> */}
        <h1 style={{ color: "cyan" }}>Love react</h1>
        {/* <Person name="Ataur" sal="2012"></Person>
        <Person name="lizu" sal="2013"></Person>
        <Person name="himel" sal="2014"></Person>
        <Person name="rahim" sal="2015"></Person> */}

        <ul>
          {nayok.map((noy) => (
            <li>{noy}</li>
          ))}

          {products.map((pro) => (
            <li>{pro.name}</li>
          ))}
        </ul>
        {products.map((pd) => (
          <Products products={pd}></Products>
        ))}
      </header>
    </div>
  );
}
function User() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  });
  return (
    <div>
      <h4>dynamic User:{users.length}</h4>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handelIncrease = () => setCount(count + 1);
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={handelIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}

function Products(props) {
  const styles = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "light",
    height: "300px",
    width: "200px",
  };

  return (
    <div style={styles}>
      <h3>{props.products.name}</h3>
      <h1>{props.products.price}</h1>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid red",
    borderRadius: "5px",
    margin: "10px",
    padding: "10px",
  };

  return (
    <div style={personStyle}>
      <h1>{props.name}</h1>
      <h3>Hero of the year {props.sal}</h3>
    </div>
  );
}

export default App;
