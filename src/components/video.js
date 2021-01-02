import { Component } from "react";
import divestvideo from "../assets/videos/divest.mp4";
import poster from "../assets/images/poster.png";
// import { ReactComponent as DownArrow } from "../assets/svgs/chevron-down.svg";
class Video extends Component {
  render() {
    return (
      <div className="min-h-full inline-block relative justify-items-center content-center">
        <div className="absolute group left-1/4 top-2/3 md:top-1/3">
          <div className="relative -left-1/4 -top-2/3 md:-top-1/3 bg-green-300 bg-opacity-25 hover:bg-blue-300 rounded-lg hover:bg-opacity-75 p-2">
            <a
              href="https://docs.google.com/document/d/1XA4UaVUodY3ZJt5fqC9im3tpRVxT9X_Akalxg72_hOM"
              className="py-1 text-left prod-title"
            >
              <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-md uppercase text-black font-bold">
                Our demands are clear:
              </p>
              <p className="uppercase text-sm text-gray-700">
                Read our open letter!
              </p>
            </a>
          </div>
        </div>
        <div className="absolute group left-1/4 top-1/3 md:left-3/4 md:top-1/3">
          <div className="relative -left-1/4 -top-1/3 md:-left-3/4 md:-top-1/3 bg-green-300 bg-opacity-25 hover:bg-blue-300 rounded-lg hover:bg-opacity-75 p-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQF86Mlu3q2GEawiJ5HPrU_2RP3P9CgAZcAFNXlDG8DY2m2g/viewform?usp=sf_link"
              className="py-1 text-left prod-title"
            >
              <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-md uppercase text-black font-bold">
                We require your help to make our voices heard
              </p>
              <p className="uppercase text-sm text-gray-700">
                Sign our petition!
              </p>
            </a>
          </div>
        </div>
        <video
          src={divestvideo}
          className="hidden md:inline"
          loop
          autoPlay
          muted
          controls={false}
          poster={poster}
        ></video>
        <img src={poster} className="inline md:hidden" alt="Divest Now!"></img>
      </div>
    );
  }
}

export default Video;
