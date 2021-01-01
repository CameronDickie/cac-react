import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 text-center p-1">
          <div className="w-screen flex justify-center items-center">
            <div className="container mx-auto w-full p-4 md:w-3/4 sm:w-1/2">
              <div className="card flex flex-col justify-center p-6 bg-white rounded-lg shadow-2xl divide-y divide-gray-400">
                <div className="prod-title">
                  <p className="text-2xl pb-2 uppercase text-gray-900 font-bold">
                    What is Climate Action Carleton?
                  </p>
                  <p className="uppercase text-sm text-gray-400">
                    a brief description
                  </p>
                </div>
                <p className="font-medium p-4">
                  Founded in 2019, Climate Action Carleton is a student activist
                  group based on the Carleton University campus that advocates
                  for climate action and climate justice. We are an independent
                  group run entirely by students.
                </p>
                <p className="font-medium p-4">
                  At Climate Action Carleton, we know that only clear, concrete,
                  and transformative action is enough to tackle the global
                  climate crisis. We understand that, because decades of
                  incrementalism and stalling have delayed action and progress,
                  we must act in an unprecedent, daring, and ambitious manner if
                  we are going to have a shot at transforming our current
                  situation.
                </p>
                <p className="font-medium p-4">
                  Both on and off the Carleton campus, Climate Action Carleton
                  lobbies those who have the power to make impactful
                  climate-related decisions that are essential for the future of
                  Carleton’s students and the welfare of our community, country,
                  and of our world.
                </p>
                <p className="font-medium p-4">
                  On campus, we work to hold executive actors at Carleton
                  University including the Board of Governors, the President and
                  the Chancellor, as well as CUSA, our student union,
                  accountable for their actions or their inactions. Off-campus,
                  our lobbying efforts and campaigns are dedicated towards all
                  levels of government, relevant corporations and
                  businesspeople, civil society actors, and other groups in our
                  community. Click here to read more about our lobbying
                  strategies and policies.
                </p>
              </div>
            </div>
          </div>
          <div className="w-screen flex py-16 justify-center items-center">
            <div className="container mx-auto w-full p-4 md:w-3/4 sm:w-1/2">
              <div className="card flex flex-col justify-center p-6 bg-white rounded-lg shadow-2xl divide-y divide-gray-400">
                <div className="prod-title">
                  <p className="text-2xl pb-2 uppercase text-gray-900 font-bold">
                    Our Mission
                  </p>
                  <p className="uppercase text-sm text-gray-400">
                    what do we stand for?
                  </p>
                </div>
                <p className="font-medium p-4">
                  To advocate, raise awareness, and take action upon issues of
                  the global climate crisis within and beyond the Carleton
                  community in a manner that recognizes the urgent need for
                  unprecedented and transformative approaches to these problems,
                  all while meaningfully incorporating an intersectional
                  approach through considerations of indigeneity, race, and
                  gender.
                </p>
                <p className="font-medium p-4">
                  Further to our lobbying efforts, Climate Action Carleton also
                  works to raises awareness and understanding on issues of
                  climate change and climate justice in Ottawa, in Canada, and
                  around the world. We do this by organizing educational events
                  about the climate crisis that focus on climate change, the
                  intersectionality of the crisis, and climate justice.
                </p>
                <p className="font-medium p-4">
                  As a group of young people, we pride ourselves on our ability
                  to think and act ‘outside of the box’ in original and
                  innovative ways. However, we realize that we cannot of course
                  know everything there is to know about the climate crisis. As
                  a result, we are committed to staying open-minded to new and
                  innovate perspectives on the climate crisis – especially those
                  that provide insights into how the climate movement can
                  better-address the vulnerability, inequality, and
                  marginalization posed by the crisis. If anyone has input for
                  us about the operations of Climate Action Carleton, we
                  encourage them to reach out to us to spark a constructive
                  discussion about any given issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
