import { Component } from "react";
import ReactPlayer from "react-player/lazy";

class Divestment extends Component {
  render() {
    return (
      <div>
        <div
          id="intro"
          className="w-screen flex justify-center text-center items-center"
        >
          <div className="container mx-auto w-full p-4 md:w-3/4 sm:w-1/2">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl divide-y divide-gray-400">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Let's Talk Divestment
                </p>
              </div>
              <p className="font-medium p-4">
                For decades, the fossil fuel industry has knowingly polluted our
                atmosphere and jeopardized our future with impunity. This has
                always been catastrophic for our ecosystems, but now we have
                reached a tipping point. As of 2019, the global fossil fuel
                industry has 2,798 gigatons of coal, oil, and gas currently in
                its reserves, ready to be burned into our atmosphere. However,
                this number is five times higher than scientists’ carbon budget
                for remaining below the goal of 2-degrees-celsius rise in global
                average temperature.
              </p>
              <p className="font-medium p-4">
                Climate Action Carleton (CAC) and{" "}
                <a
                  className="underline text-blue-700"
                  href="https://linktr.ee/cjcuottawa"
                >
                  Climate Justice Climatique UOttawa (CJCUO)
                </a>{" "}
                are calling on Carleton University and the University of Ottawa
                to hold the fossil fuel industry accountable for its actions by
                divesting our university endowment funds from the fossil fuel
                industry by 2025. This includes divesting from coal, oil, and
                natural gas companies that emit harmful greenhouse gases into
                the atmosphere through their business practices. We are calling
                for divestment in order to send a simple, powerful message:
                profiting from the destruction of our planet is ecologically
                disastrous, financially unfeasible, and morally unacceptable.
              </p>
            </div>
          </div>
        </div>
        <div
          id="whatis"
          className="w-screen flex justify-center text-center items-center"
        >
          <div className="container mx-auto w-full p-4 md:w-3/4 sm:w-1/2">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl divide-y divide-gray-400">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  What is Divestment?
                </p>
              </div>
              <p className="font-medium p-4">
                Put simply, divestment is the opposite of investment. A person
                or organization divests from businesses when they sell their
                stocks, bonds, or other financial holdings, essentially
                withdrawing their financial support from the organization. A
                catalyst for divestment can be the devaluation of an asset that
                makes holding onto it financially unfeasible, or the unethical
                implications of supporting a company or industry that causes
                social injury.
              </p>
              <div>
                <div>
                  <p className="text-4xl uppercase text-gray-900 font-bold">
                    An informative video by
                  </p>
                  <a
                    className="underline uppercase text-2xl lg:text-4xl text-gray-900 font-bold text-center"
                    href="https://gofossilfree.org/"
                  >
                    GoFossileFree.org
                  </a>
                </div>
                <div className="flex justify-center text-center p-4">
                  <ReactPlayer url="https://www.youtube.com/watch?v=_dApzI9jN04" playsinline={true} pip={true}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="why" className="w-screen flex justify-center items-center">
      <div className="container mx-auto text-center w-full p-4 md:w-3/4 sm:w-1/2">
        <div
          className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl divide-y divide-gray-400"
        >
          <div className="prod-title">
            <p className="text-2xl uppercase text-gray-900 font-bold">Why Should we Divest?</p>
          </div>
          <p
            className="font-medium p-4"
          >For decades, the fossil fuel industry has knowingly polluted our atmosphere and jeopardized our future with impunity. This has always been catastrophic for our ecosystems, but now we have reached a tipping point. As of 2019, the global fossil fuel industry has 2,798 gigatons of coal, oil, and gas currently in its reserves, ready to be burned into our atmosphere. However, this number is five times higher than scientists’ carbon budget for remaining below the goal of 2-degrees-celsius rise in global average temperature.</p>
          <p className="font-medium p-4">
            Universities are a key layer in the fabric of civil society. Their reputation for knowledge, wisdom, and innovation have established them as institutions of high intellectual authority. For generations, university and college campuses have been drivers of social change, demanding racial, social, and now environmental, justice.
            By divesting from the fossil fuel industry, Carleton University and the University of Ottawa have an important opportunity to take a powerful stand against this industry and its catastrophic impacts.
          </p>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default Divestment;
