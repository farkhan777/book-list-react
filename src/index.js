import React from "react";
import ReactDom from "react-dom";

import "./style.css";

// Objects
const book1 = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51r9ZiBU6rL._AC_SX184_.jpg",
  title: "The Four Winds: A Novel",
  author: "Kristin Hannah",
}

const book2 = {
  img: "https://m.media-amazon.com/images/I/51YGuDBZYbL.jpg",
  title: "The Lost Apothecary: A Novel Kindle Edition",
  author: "Sarah Penner",
}

const book3 = {
  img: "https://m.media-amazon.com/images/I/41gS352Nu2L.jpg",
  title: "What's Mine and Yours Kindle Edition",
  author: "Naima Coster",
}

function Library() {
  return(
    <section className="book-list">
      <Book img={book1.img} title={book1.title} author={book1.author} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem iure et voluptatem aspernatur impedit unde minus amet quasi iste. Vero amet ad nesciunt. Placeat perferendis deleniti blanditiis nulla fugiat!</p>
      </Book>
      <Book img={book2.img} title={book2.title} author={book2.author} >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur libero dicta, nesciunt ex dolor amet iste rem laudantium nihil voluptate nostrum, ab deleniti, natus in maxime magnam excepturi autem minus.</p>
      </Book>
      <Book img={book3.img} title={book3.title} author={book3.author} />
    </section>
  )
}

const Book = (props) => {
  return(
    <article className="book">
      <img src={props.img} alt=""/>
      <h1>{props.title}</h1>
      <h5>{props.author}</h5>
      {props.children}
    </article>
  )
}

ReactDom.render(<Library/>, document.getElementById("root"));
