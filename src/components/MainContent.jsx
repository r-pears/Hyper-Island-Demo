import React from "react";
import Card from "./Card";

function MainContent(props) {
  return (
    <main>
      <section>
        <h1>The Hyperflix</h1>
        <p>
          Welcome to the Hyperflix! We have the best movies and TV shows for you
          to enjoy. Take a look at our selection and start watching today!
        </p>
        <button>Subscribe</button>
      </section>
      <section>
        <h2>Popular</h2>
        {props.data.blocks.map((block, index) => {
          return block.products.map((product, index) => {
            if (index <= 9) {
              return <Card key={index} product={product} />;
            }
          });
        })}
      </section>
      <section>
        <h2>Classics</h2>
      </section>
      <section>
        <h2>Reflection Movie Upload</h2>
        <form method="POST" action="/">
          <label>
            Title
            <input type="text" placeholder="Title" />
          </label>
          <label>
            Upload a movie
            <input type="file" />
          </label>
          <button type="submit">Upload</button>
        </form>
      </section>
      <section>
        <h2>Presentation</h2>
        <h3>MANDATORY!</h3>
      </section>
    </main>
  );
}

export default MainContent;
