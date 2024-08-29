import "bootstrap/dist/css/bootstrap.min.css";

export function Home() {
  return (
    <div className="container mt-5">
      <div className="card p-5 shadow-lg border-0">
        <h1 className="h3 text-center mb-4 text-primary font-weight-bold">
          Project: E-Commerce Cart Feature
        </h1>
        <p className="lead text-justify">
          In this project, I built a dynamic e-commerce cart system, learning
          key skills like project setup, routing, and navbar design. I developed
          a store page and implemented a shopping cart using React's context
          API, with data persistence through the <code>useLocalStorage</code>{" "}
          hook. This project strengthened my understanding of React and state
          management.
        </p>
      </div>
    </div>
  );
}
