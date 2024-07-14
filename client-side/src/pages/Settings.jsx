import React from "react";

function Settings() {
  return (
    <div className="text-gray-300">
      <div className="mt-10 md:ml-5 ml-2 flex justify-between w-[95%] items-center">
        <h1 className="text-5xl font-bold">Settings</h1>
        <i className="fa-solid fa-magnifying-glass text-lg translate-y-1"></i>
      </div>
      <div className="mt-[50px] md:ml-8 ml-4 lg:max-w-[80%]">
        <div>
          We are currently working on giving our users more immersive experience
          , we will surely update the settings that you all can change
        </div>
        <br />
        <div>
          What all Settings user will get to change in Future: <br />
          <br />
          <ol className="list-decimal ml-10">
            <li>Option to change the language of text</li>
            <li>
              Option to select or deselect the automatic song recommendation
            </li>
            <li>and many more...</li>
          </ol>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 mb-[100px]">
          <div class="flex items-center justify-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div class="flex items-center justify-center">
              <div class="px-2 md:px-12">
                <p class="text-2xl font-bold text-white-900 md:text-4xl text-center">
                  Get in touch
                </p>
                <p class="mt-4 text-lg text-white-600 text-center">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" class="mt-8 space-y-4">
                  <div class="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-white-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="first_name"
                      >
                        First Name
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-white-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-white-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-white-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="grid w-full  items-center gap-1.5">
                    <label
                      class="text-sm font-medium leading-none text-white-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-white-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="grid w-full  items-center gap-1.5">
                    <label
                      class="text-sm font-medium leading-none text-white-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-white-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div class="grid w-full  items-center gap-1.5">
                    <label
                      class="text-sm font-medium leading-none text-white-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-white-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Leave us a message"
                      cols="3"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    class="w-full rounded-md lg:bg-black bg-dark-gray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Settings;
