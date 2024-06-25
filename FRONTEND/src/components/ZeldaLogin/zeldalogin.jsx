import "./zeldalogin.css"
const ZeldaComponent = () => (
    <div className="zelda-container">
      <div className="background-holder"></div>
      <div className="stage">
        <div className="triangle one">
          <figure className="front"></figure>
          <figure className="back"></figure>
          <figure className="side1"></figure>
          <figure className="side2"></figure>
          <figure className="side3"></figure>
        </div>
        <div className="triangle two">
          <figure className="front"></figure>
          <figure className="back"></figure>
          <figure className="side1"></figure>
          <figure className="side2"></figure>
          <figure className="side3"></figure>
        </div>
        <div className="triangle three">
          <figure className="front"></figure>
          <figure className="back"></figure>
          <figure className="side1"></figure>
          <figure className="side2"></figure>
          <figure className="side3"></figure>
        </div>
      </div>
      <div className="zeldatext">
        <h2>The legend of</h2>
        <h1><span className="z">Z</span>EL<span className="closer">DA</span></h1>
        <h3><a href="http://hop.ie/blog/zelda"></a></h3>
      </div>
    </div>
  );

  export default ZeldaComponent