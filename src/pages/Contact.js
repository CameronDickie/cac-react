import { Component } from "react";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();
  {
    /* we need to make sure that none of the fields are empty and notify the user accordingly*/
  }
  let a = document.getElementById("address");
  let n = document.getElementById("name");
  let s = document.getElementById("subject");
  let m = document.getElementById("message");
  if (a.value === "" || n.value === "" || s.value === "" || m.value === "") {
    let r = document.getElementById("reminder");
    r.className = "text-red-500 text-xs italic pb-4";
    return;
  }
  emailjs
    .sendForm(
      "service_wwrgbfi",
      "cac_email",
      e.target,
      "user_OOBzVXfSJBwqdXzF0RYDj"
    )
    .then(
      (result) => {
        console.log(result.text);
        let r = document.getElementById("reminder");
        r.className = "text-red-500 text-xs italic hidden pb-4"
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
class Contact extends Component {
  render() {
    return (
      <div className="mt-5 divide-y divide-gray-400 p-1">
        <div className="flex justify-center p-4">
          <div className="card flex flex-col md:w-1/2 justify-center p-2 bg-white rounded-lg text-center">
            <div className="prod-title">
              <p className="text-2xl uppercase text-gray-900 font-bold">
                Send us an Email
              </p>
            </div>
          </div>
        </div>
        <form className="w-full max-w-lg p-4 mx-auto" onSubmit={sendEmail}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="youremail@host.com"
                name="address"
                id="address"
              />
              <p className="text-red-500 text-xs italic" id="aerror">
                We need you to fill out this field, so that we can get back to
                you!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="John Smith"
                name="name"
                id="name"
              />
              <p className="text-gray-600 text-xs italic" id="nerror">
                Let's make things a little less awkward...
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Your Subject Here"
                name="subject"
                id="subject"
              />
              <p className="text-red-500 text-xs italic" id="serror">
                Give us a subject so your email does not go to spam!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Message
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                placeholder="I want to change the world!"
                name="message"
              ></textarea>
              <p className="text-gray-600 text-xs italic" id="merror">
                Please enter a body for your email
              </p>
            </div>
          </div>
          <p className="text-red-500 text-xs italic hidden pb-4" id="reminder">
            This is a reminder that you need to fill out all forms before
            submitting!
          </p>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <input
                type="submit"
                value="Send Email"
                className="shadow bg-green-300 focus:outline-none focus:bg-green-500 text-white font-bold py-2 px-4 rounded"
              ></input>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
