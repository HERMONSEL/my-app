import React from "react"
import ReactDOM from "react-dom"
// give classes getting to the root of tghe folder.
import "./index.css"
// adding props
import img34 from "./images/a.jpg";
import img22 from "./images/c.jpg";
import img57 from "./images/c.jpg";
import img50 from "./images/d.jpg";
import img51 from "./images/e.jpg";
import img52 from "./images/b.jpg";


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
    <Person img="34" name = "spiderHermon" job="web developer"><img src={img34}></img></Person>
    <Person img="22" name = "Hermon" job="designer"><img src={img22}></img></Person>
    <Person img="56" name = "spider" job="boss">
       <p>
      i have figured it out<br></br>
      <strong>Lorem10</strong>
    </p>
    </Person>
    <Person img="57" name = "spider" job="Ass.boss"><img src={img57}></img></Person>
    <Person img="50" name = "spider" job="director 1"><img src={img50}></img></Person>
    <Person img="51" name = "spider" job="director 2"><img src={img51}></img></Person>
    <Person img="52" name = "spider" job="gen. director"><img src={img52}></img></Person>
    </section >
    
  );
};

// call here
ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));

// psh coe to git HTMLButtonElement
// npm istall gh-pages-- save-dev