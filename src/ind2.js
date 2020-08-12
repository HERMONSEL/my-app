import React from "react"
import ReactDOM from "react-dom"
// give classes getting to the root of tghe folder.
import "./index.css"
// adding props

const Person = ({ img, name, job, children }) => {
  // using template literals
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <article className = "person">
      {/* give class name here */}
      <img src={url}></img>
  <h4>{name}</h4>
  <h4>{job}</h4>
      {children}
    </article>
    );
};

// we crete another component
const PersonList = () => {
  return (
    <section className="person-list">
    <Person img="34" name = "spiderHermon" job="web developer"></Person>
    <Person img="22" name = "Hermon" job="designer"></Person>
    <Person img="56" name = "spider" job="boss">
       <p>
      i have figured it out<br></br>
      <strong>Lorem10</strong>
    </p>
    </Person>
    <Person img="57" name = "spider" job="Ass.boss"></Person>
   
    </section>
  );
};

// call here
ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
