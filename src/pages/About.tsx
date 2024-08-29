import "bootstrap/dist/css/bootstrap.min.css";

export function About() {
  return (
    <div className="container mt-5">
      <div className="card p-5 shadow-lg border-0">
        <h1 className="h3 text-center mb-4 text-primary font-weight-bold">
          About Me
        </h1>
        <p className="lead text-justify">
          I am a Full Stack Developer with expertise in building modern web
          applications. My skill set includes React, Next.js, Node.js,
          Express.js, and MongoDB. I am passionate about creating efficient,
          scalable, and user-friendly solutions that bridge the gap between the
          front-end and back-end of web development.
        </p>
      </div>
    </div>
  );
}
