import "./App.css";
import Video from "../src/Videos/output.webm";
import bg from "../src/images/section_bg.png";
import img1 from "../src/images/DSC01558-Edit.jpg";
// import img2 from "../src/images/veda1.png";
import img3 from "../src/images/DSC01933.jpg";
import img4 from "../src/images/DSC01941-Edit.jpg";
import img5 from "../src/images/DSC01952-Edit.jpg";
import img6 from "../src/images/DSC01994-Edit.jpg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    countdown();
  }, []);
  const countdown = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  };

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <video
        width="100%"
        height="100%"
        autoplay=""
        muted="true"
        playsinline=""
        data-wf-ignore="true"
        data-object-fit="cover"
        controls
      >
        <source src={Video} type="video/mp4" data-wf-ignore="true" />
      </video>
      {/* <video width="100%" height="100%" controls autoPlay muted playsinline data-object-fit="cover">
        <source src={Video} type="video/mp4" data-wf-ignore="true"/>
      </video> */}
      <div id="about" className="about py-5">
        {/* <img src={bg} alt="bg-image" /> */}
        <div>
          <p>Join us to celebrate</p>
          <h3>Vedanshika's</h3>
          <h1>
            2<sup>nd</sup> Birthday
          </h1>
        </div>
      </div>
      <div
        className="images-section carouselExampleAutoplaying"
        style={{ display: "none" }}
      >
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              {/* <img src={img2} className="d-block w-100" alt="..." /> */}
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          {/* <div className="carousel-item active">
            <img src={img2} className="d-block w-100" alt="..." />
          </div> */}
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100" alt="..." />
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      <div className="invited py-5 px-2">
        <p className="text-center">Invited By</p>
        <div className="section1 my-5">
          <div className="col-sm-6 px-1">
            <h2>
              Pulimamidi.Arun <br />&<br /> Pulimamidi.Rajkumar Goud
            </h2>
          </div>
          <div className="col-sm-6">
            <img src={img4} width={"100%"} alt="img4" />
          </div>
        </div>
        <div className="section2 my-5">
          <div className="col-sm-6">
            <img src={img1} width={"100%"} alt="img1" />
          </div>
          <div className="col-sm-6 px-1">
            <h2>
              Pulimamidi.Sony <br />&<br /> Pulimamidi.RohithKumar Goud{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="counter text-center">

      <p id="demo" className="py-5"></p>
      </div>
      {/* <iframe
        src="https://free.timeanddate.com/countdown/i93yyqjn/n505/cf103/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pcfff/tcfbd9e8/fs100/szw320/szh135/tatTime%20left%20to%20Event%20in/tac000/tptTime%20since%20Event%20started%20in/tpc000/mac000/mpc000/iso2024-09-18T19:00:00"
        allowtransparency="true"
        frameborder="0"
        width="320"
        height="135"
      ></iframe> */}

      <div className="venu">
        <div className="text-center">
          <p>Save the Date</p>
          <p>18 September, 2023</p>
          <p>Wednesday - 6:00pm</p>
        </div>
        <div className="text-center">
          <p>Venu</p>
          <p>Will be updated soon</p>
          <p className="btn btn-dark">View Map</p>
        </div>
      </div>
    </div>
  );
}

export default App;
