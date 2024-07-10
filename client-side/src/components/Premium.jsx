import React from "react";

function Premium() {

  const handleViewAllPlansClick = () => {
    const plansSection = document.getElementById("plansSection");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="text-white w-full">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">
          Listen without limits. Try 2 months of Premium for ₹119.
        </h1>
        <p className="text-xl mb-6">Only ₹119/month after. Cancel anytime.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.spotify.com/in-en/purchase/offer/default-2m-for-1-carrier-billing/?country=IN&ref=webplayer_app_native_pdp" target="_blank">
            <button className="text-black font-bold p-4 rounded-full border-2 border-white text-sm bg-white">
              Get Premium Individual
            </button>
          </a>
          <button className="text-white font-bold p-4 rounded-full border-2 border-white text-sm" onClick={handleViewAllPlansClick}>
            View all plans
          </button>
        </div>
        <p className="text-sm mt-4">
          ₹119 for 2 months, then ₹119 per month after. Offer only available if
          you haven't tried Premium before.{" "}
          <a href="#" className="hover:underline">
            Terms apply
          </a>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-12 gap-y-8">
        <div className="text-center max-w-[650px]">
          <h2 className="text-3xl font-bold mb-2">
            Affordable plans for any situation
          </h2>
          <p className="text-[16px] text-gray-400 mb-4">
            Choose a Premium plan and listen to ad-free music without limits on
            your phone, speaker, and other devices. Pay in various ways. Cancel
            anytime.
          </p>
        </div>
        <div>
          <table className="border-collapse border-none text-left">
            <tr>
              <td rowSpan={7} className="text-4xl font-bold p-4">
                All Premium Plans include
              </td>
              <td className="text-sm font-normal">
                ✔️Add Free Music Listening
              </td>
            </tr>
            <tr>
              <td className="text-sm font-normal">
                ✔️Download to listen offline
              </td>
            </tr>
            <tr>
              <td className="text-sm font-normal">✔️Play songs in any order</td>
            </tr>
            <tr>
              <td className="text-sm font-normal">✔️High audio quality</td>
            </tr>
            <tr>
              <td className="text-sm font-normal">
                ✔️Listen with friends in real time
              </td>
            </tr>
            <tr>
              <td className="text-sm font-normal">
                ✔️Organize listening queue
              </td>
            </tr>
            <tr>
              <td className="text-sm font-normal">
                ✔️Listening insights (not in Mini)
              </td>
            </tr>
          </table>
        </div>

        <div className="flex flex-col gap-10 w-full mt-10" id="plansSection">
          <div className="flex gap-10 justify-center items-center">
                <div className="bg-light-gray h-[470px] w-[330px] rounded-xl">
              <div className="bg-green-300 h-[40px] w-[175px] rounded-br-xl rounded-tl-xl text-sm text-black py-2 font-bold">
                ₹25 for 1 week
              </div>
              <div className="mt-5 ml-5">
                <div className="flex text-md font-bold gap-2">
                  <svg
                    className="h-[30px]"
                    viewBox="0 0 167.5 167.5"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    aria-labelledby="spotify-white-title"
                  >
                    <title id="spotify-white-title">Spotify</title>
                    <path
                      fill="#FFFFFF"
                      d="M83.75,0C37.52,0,0,37.52,0,83.75c0,46.24,37.52,83.75,83.75,83.75c46.24,0,83.75-37.52,83.75-83.75C167.5,37.52,130,0,83.75,0z M120.6,120.27c-1.86,2.7-5.48,3.45-8.18,1.59c-22.39-15.44-50.56-18.91-83.66-11.05c-3.18,0.74-6.24-1.3-6.98-4.48c-0.74-3.18,1.3-6.24,4.48-6.98c35.36-8.26,66.61-4.33,91.61,12.45C121.34,113.83,122.18,117.56,120.6,120.27z M132.29,93.86c-2.32,3.35-6.91,4.24-10.26,1.91c-25.62-17.8-64.74-22.98-94.92-13.43c-3.72,1.16-7.65-0.98-8.82-4.7c-1.16-3.72,0.98-7.65,4.7-8.82c34.58-10.71,76.99-5.01,105.62,15.07C133.19,85.23,134.61,90.51,132.29,93.86z M135.95,68.18c-0.98,0-2.01-0.24-2.97-0.76c-30.58-17.05-82.12-18.52-111.02-10.84c-3.34,0.91-6.81-0.97-7.72-4.31c-0.91-3.34,0.97-6.81,4.31-7.72c32.68-8.86,87.08-7.11,121.5,12.06c3.08,1.72,4.14,5.55,2.42,8.64C140.07,67.02,138.04,68.18,135.95,68.18z"
                    ></path>
                  </svg>
                  Premium
                </div>
                <h1 className="text-3xl font-bold text-green-300 flex mt-3 mb-2">Mini</h1>
                <div className="flex text-sm font-bold">₹7 for 1 day</div>
                <div className="flex text-sm font-bold">₹25 for 1 week</div>
                <hr className='w-[90%] h-[0.4px] border-b border-dark-gray mt-4 mb-0' />

                <ul className="ml-5 mt-4 list-disc text-[15px] flex flex-col items-start h-[112px]">
                    <li>1 mobile-only Premium account</li>
                    <li>Offline listening on 1 device</li>
                    <li>One-time payment</li>
                    <li>Basic audio quality</li>
                </ul>
              </div>
                <button className="mt-6 border-green-300 bg-green-300 text-black font-bold text-[16px] p-2 rounded-full w-[90%]">Get Premium Mini</button>
                <div className="text-gray-500 text-sm mt-2 underline">Terms apply</div>
                </div>
                <div className="bg-light-gray h-[470px] w-[330px] rounded-xl">
              <div className="bg-pink-400 h-[40px] w-[175px] rounded-br-xl rounded-tl-xl text-sm text-black py-2 font-bold">
                ₹119 for 2 months
              </div>
              <div className="mt-5 ml-5">
                <div className="flex text-md font-bold gap-2">
                  <svg
                    className="h-[30px]"
                    viewBox="0 0 167.5 167.5"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    aria-labelledby="spotify-white-title"
                  >
                    <title id="spotify-white-title">Spotify</title>
                    <path
                      fill="#FFFFFF"
                      d="M83.75,0C37.52,0,0,37.52,0,83.75c0,46.24,37.52,83.75,83.75,83.75c46.24,0,83.75-37.52,83.75-83.75C167.5,37.52,130,0,83.75,0z M120.6,120.27c-1.86,2.7-5.48,3.45-8.18,1.59c-22.39-15.44-50.56-18.91-83.66-11.05c-3.18,0.74-6.24-1.3-6.98-4.48c-0.74-3.18,1.3-6.24,4.48-6.98c35.36-8.26,66.61-4.33,91.61,12.45C121.34,113.83,122.18,117.56,120.6,120.27z M132.29,93.86c-2.32,3.35-6.91,4.24-10.26,1.91c-25.62-17.8-64.74-22.98-94.92-13.43c-3.72,1.16-7.65-0.98-8.82-4.7c-1.16-3.72,0.98-7.65,4.7-8.82c34.58-10.71,76.99-5.01,105.62,15.07C133.19,85.23,134.61,90.51,132.29,93.86z M135.95,68.18c-0.98,0-2.01-0.24-2.97-0.76c-30.58-17.05-82.12-18.52-111.02-10.84c-3.34,0.91-6.81-0.97-7.72-4.31c-0.91-3.34,0.97-6.81,4.31-7.72c32.68-8.86,87.08-7.11,121.5,12.06c3.08,1.72,4.14,5.55,2.42,8.64C140.07,67.02,138.04,68.18,135.95,68.18z"
                    ></path>
                  </svg>
                  Premium
                </div>
                <h1 className="text-3xl font-bold text-pink-400 flex mt-3 mb-2">Individual</h1>
                <div className="flex text-sm font-bold">₹119 for 2 months</div>
                <div className="flex text-sm font-bold">₹119 / month after</div>
                <hr className='w-[90%] h-[0.4px] border-b border-dark-gray mt-4 mb-0' />

                <ul className="ml-5 mt-4 list-disc text-[15px] flex flex-col items-start h-[112px]">
                    <li>1 Premium account</li>
                    <li>Cancel anytime</li>
                    <li>Subscribe or one-time payment</li>
                </ul>
              </div>
                <button className="mt-6 border-pink-400 bg-pink-400 text-black font-bold text-[16px] p-2 rounded-full w-[90%]">Get Premium Individual</button>
                <div className="text-gray-500 text-sm mt-2 underline">Terms apply</div>
                </div>
          </div>

          <div className="flex gap-10 justify-center items-center">
                <div className="bg-light-gray h-[470px] w-[330px] rounded-xl">
              <div className="bg-blue-400 h-[40px] w-[175px] rounded-br-xl rounded-tl-xl text-sm text-black py-2 font-bold">
              ₹179 for 2 months
              </div>
              <div className="mt-5 ml-5">
                <div className="flex text-md font-bold gap-2">
                  <svg
                    className="h-[30px]"
                    viewBox="0 0 167.5 167.5"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    aria-labelledby="spotify-white-title"
                  >
                    <title id="spotify-white-title">Spotify</title>
                    <path
                      fill="#FFFFFF"
                      d="M83.75,0C37.52,0,0,37.52,0,83.75c0,46.24,37.52,83.75,83.75,83.75c46.24,0,83.75-37.52,83.75-83.75C167.5,37.52,130,0,83.75,0z M120.6,120.27c-1.86,2.7-5.48,3.45-8.18,1.59c-22.39-15.44-50.56-18.91-83.66-11.05c-3.18,0.74-6.24-1.3-6.98-4.48c-0.74-3.18,1.3-6.24,4.48-6.98c35.36-8.26,66.61-4.33,91.61,12.45C121.34,113.83,122.18,117.56,120.6,120.27z M132.29,93.86c-2.32,3.35-6.91,4.24-10.26,1.91c-25.62-17.8-64.74-22.98-94.92-13.43c-3.72,1.16-7.65-0.98-8.82-4.7c-1.16-3.72,0.98-7.65,4.7-8.82c34.58-10.71,76.99-5.01,105.62,15.07C133.19,85.23,134.61,90.51,132.29,93.86z M135.95,68.18c-0.98,0-2.01-0.24-2.97-0.76c-30.58-17.05-82.12-18.52-111.02-10.84c-3.34,0.91-6.81-0.97-7.72-4.31c-0.91-3.34,0.97-6.81,4.31-7.72c32.68-8.86,87.08-7.11,121.5,12.06c3.08,1.72,4.14,5.55,2.42,8.64C140.07,67.02,138.04,68.18,135.95,68.18z"
                    ></path>
                  </svg>
                  Premium
                </div>
                <h1 className="text-3xl font-bold text-blue-400 flex mt-3 mb-2">Family</h1>
                <div className="flex text-sm font-bold">₹179 for 2 months</div>
                <div className="flex text-sm font-bold">₹179 / month after</div>
                <hr className='w-[90%] h-[0.4px] border-b border-dark-gray mt-4 mb-0' />

                <ul className="ml-5 mt-4 list-disc text-[15px] flex flex-col items-start h-[112px]">
                    <li>Up to 6 Premium accounts</li>
                    <li>Control content marked as explicit</li>
                    <li>Cancel anytime</li>
                    <li>Subscribe or one-time payment</li>
                </ul>
              </div>
                <button className="mt-6 border-blue-400 bg-blue-400 text-black font-bold text-[16px] p-2 rounded-full w-[90%]">Get Premium Family</button>
                <div className="text-gray-500 text-sm mt-2 underline">Terms apply</div>
                </div>
                <div className="bg-light-gray h-[470px] w-[330px] rounded-xl">
              <div className="bg-orange-300 h-[40px] w-[175px] rounded-br-xl rounded-tl-xl text-sm text-black py-2 font-bold">
              ₹149 for 2 months
              </div>
              <div className="mt-5 ml-5">
                <div className="flex text-md font-bold gap-2">
                  <svg
                    className="h-[30px]"
                    viewBox="0 0 167.5 167.5"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    aria-labelledby="spotify-white-title"
                  >
                    <title id="spotify-white-title">Spotify</title>
                    <path
                      fill="#FFFFFF"
                      d="M83.75,0C37.52,0,0,37.52,0,83.75c0,46.24,37.52,83.75,83.75,83.75c46.24,0,83.75-37.52,83.75-83.75C167.5,37.52,130,0,83.75,0z M120.6,120.27c-1.86,2.7-5.48,3.45-8.18,1.59c-22.39-15.44-50.56-18.91-83.66-11.05c-3.18,0.74-6.24-1.3-6.98-4.48c-0.74-3.18,1.3-6.24,4.48-6.98c35.36-8.26,66.61-4.33,91.61,12.45C121.34,113.83,122.18,117.56,120.6,120.27z M132.29,93.86c-2.32,3.35-6.91,4.24-10.26,1.91c-25.62-17.8-64.74-22.98-94.92-13.43c-3.72,1.16-7.65-0.98-8.82-4.7c-1.16-3.72,0.98-7.65,4.7-8.82c34.58-10.71,76.99-5.01,105.62,15.07C133.19,85.23,134.61,90.51,132.29,93.86z M135.95,68.18c-0.98,0-2.01-0.24-2.97-0.76c-30.58-17.05-82.12-18.52-111.02-10.84c-3.34,0.91-6.81-0.97-7.72-4.31c-0.91-3.34,0.97-6.81,4.31-7.72c32.68-8.86,87.08-7.11,121.5,12.06c3.08,1.72,4.14,5.55,2.42,8.64C140.07,67.02,138.04,68.18,135.95,68.18z"
                    ></path>
                  </svg>
                  Premium
                </div>
                <h1 className="text-3xl font-bold text-orange-300 flex mt-3 mb-2">Duo</h1>
                <div className="flex text-sm font-bold">₹149 for 2 months</div>
                <div className="flex text-sm font-bold">₹149 / month after</div>
                <hr className='w-[90%] h-[0.4px] border-b border-dark-gray mt-4 mb-0' />

                <ul className="ml-5 mt-4 list-disc text-[15px] flex flex-col items-start h-[112px]">
                    <li>2 Premium accounts</li>
                    <li>Cancel anytime</li>
                    <li>Subscribe or one-time payment</li>
                </ul>
              </div>
                <button className="mt-6 border-orange-300 bg-orange-300 text-black font-bold text-[16px] p-2 rounded-full w-[90%]">Get Premium Duo</button>
                <div className="text-gray-500 text-sm mt-2 underline">Terms apply</div>
                </div>
          </div>

            <div className="flex gap-10 justify-center items-center">
                <div className="bg-light-gray h-[470px] w-[330px] rounded-xl">
                  <div className="bg-purple-400 h-[40px] w-[175px] rounded-br-xl rounded-tl-xl text-sm text-black py-2 font-bold">
                  ₹59 for 2 months
                  </div>
                  <div className="mt-5 ml-5">
                    <div className="flex text-md font-bold gap-2">
                      <svg
                        className="h-[30px]"
                        viewBox="0 0 167.5 167.5"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        aria-labelledby="spotify-white-title"
                      >
                        <title id="spotify-white-title">Spotify</title>
                        <path
                          fill="#FFFFFF"
                          d="M83.75,0C37.52,0,0,37.52,0,83.75c0,46.24,37.52,83.75,83.75,83.75c46.24,0,83.75-37.52,83.75-83.75C167.5,37.52,130,0,83.75,0z M120.6,120.27c-1.86,2.7-5.48,3.45-8.18,1.59c-22.39-15.44-50.56-18.91-83.66-11.05c-3.18,0.74-6.24-1.3-6.98-4.48c-0.74-3.18,1.3-6.24,4.48-6.98c35.36-8.26,66.61-4.33,91.61,12.45C121.34,113.83,122.18,117.56,120.6,120.27z M132.29,93.86c-2.32,3.35-6.91,4.24-10.26,1.91c-25.62-17.8-64.74-22.98-94.92-13.43c-3.72,1.16-7.65-0.98-8.82-4.7c-1.16-3.72,0.98-7.65,4.7-8.82c34.58-10.71,76.99-5.01,105.62,15.07C133.19,85.23,134.61,90.51,132.29,93.86z M135.95,68.18c-0.98,0-2.01-0.24-2.97-0.76c-30.58-17.05-82.12-18.52-111.02-10.84c-3.34,0.91-6.81-0.97-7.72-4.31c-0.91-3.34,0.97-6.81,4.31-7.72c32.68-8.86,87.08-7.11,121.5,12.06c3.08,1.72,4.14,5.55,2.42,8.64C140.07,67.02,138.04,68.18,135.95,68.18z"
                        ></path>
                      </svg>
                      Premium
                    </div>
                    <h1 className="text-3xl font-bold text-purple-400 flex mt-3 mb-2">Student</h1>
                    <div className="flex text-sm font-bold">₹59 for 2 months</div>
                    <div className="flex text-sm font-bold">₹59 / month after</div>
                    <hr className='w-[90%] h-[0.4px] border-b border-dark-gray mt-4 mb-0' />
                
                    <ul className="ml-5 mt-4 list-disc text-[15px] flex flex-col items-start h-[112px]">
                        <li>1 verified Premium account</li>
                        <li>Discount for eligible students</li>
                        <li>Cancel anytime</li>
                        <li>Subscribe or one-time payment</li>
                    </ul>
                  </div>
                    <button className="mt-6 border-purple-400 bg-purple-400 text-black font-bold text-[16px] p-2 rounded-full w-[90%]">Get Premium Student</button>
                    <div className="text-gray-500 text-sm mt-2 underline">Terms apply</div>
                </div>
            </div>

        </div>

        <div className="text-center max-w-[650px] mt-10">
          <h2 className="text-3xl font-bold mb-2">
          Experience the difference
          </h2>
          <p className="text-[16px] text-gray-400 mb-4">
          Go Premium and enjoy full control of your listening. Cancel anytime.
          </p>
        </div>


      </div>
    </div>
  );
}

export default Premium;
