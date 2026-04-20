const Whyus = () => {
  return (
    <div className="w-10/10 bg-gray-300 -z-1000 mt-3 lg:-mt-30 whyus">
      <div className="w-9/9 mx-auto lg:ml-20">
        <div className="w-full my-5 text-center md:text-left">
          <p className="herotxt text-3xl font-medium mb-4">Why choose Digitalbank?</p>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </p>
        </div>

        <div className="flex gap-4 justify-between items-center mt-20 md:mt-5 flex-col md:flex-row md:flex-wrap lg:flex-row">
          <div className="w-8/10 md:w-2/10 px-y flex flex-col justify-center items-center md:flex-none md:items-start py-5">
            <img src="src\assets\images\icon-online.svg" alt="" />
            <h2 className="text-xl my-3">Online Banking</h2>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="w-8/10 md:w-2/10 px-y flex flex-col justify-center items-center md:flex-none md:items-start py-5">
            <img src="src\assets\images\icon-api.svg" alt="" />
            <h2 className="text-xl my-3">Simple Budgeting</h2>
            <p>
              
              See exactly where your money goes each month. Receive notifications when you’re 
              close to hitting your limits.
            </p>
          </div>
          <div className="w-8/10 md:w-2/10 px-y flex flex-col justify-center items-center md:flex-none md:items-start py-5">
            <img src="src\assets\images\icon-onboarding.svg" alt="" />
            <h2 className="text-xl my-3">Fast Onboarding</h2>
            <p>
               
            We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.
            </p>
          </div>
          <div className="w-8/10 md:w-2/10 px-y flex flex-col justify-center items-center md:flex-none md:items-start py-5">
            <img src="src\assets\images\icon-online.svg" alt="" />
            <h2 className="text-xl my-3"> Open API</h2>
            <p>
               Manage your savings, investments, pension, and much more from one account. Tracking 
             your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
