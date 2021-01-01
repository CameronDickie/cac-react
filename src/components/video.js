import { Component } from "react";
import divestvideo from "../assets/videos/divest.mp4";
import poster from "../assets/images/poster.png";
// import { ReactComponent as DownArrow } from "../assets/svgs/chevron-down.svg";
class Video extends Component {
  render() {
    return (
      <div className="min-h-full inline-block relative justify-items-center content-center">
        <div className="absolute group left-1/4 top-1/2">
          <div className="relative -left-1/4 -top-1/2 bg-green-300 bg-opacity-25 hover:bg-blue-300 rounded-lg hover:bg-opacity-75 p-2">
            <button className="py-1 text-left prod-title">
                <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-md uppercase text-black font-bold">We require your help to make our voices heard</p>
                <p className="uppercase text-sm text-gray-700">Sign our open letter!</p>
            </button>
          </div>
        </div>
        <video src={divestvideo} className="hidden md:inline" loop autoPlay muted controls={false} poster={poster}></video>
        <img src={poster} className="inline md:hidden" alt="Divest Now!"></img>
      </div>
    );
  }
}

export default Video;
