const HerosectionDesktop = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row sm:flex-col flex-col-reverse items-center justify-between gap-0 md:justify-between sm:gap-6 md:gap-6">
        <div className="m-0 w-6/6 px-2 md:w-2/6 -mt-38 mb-10 sm:mt-5 md:mt-5 lg:ml-20 text-center md:text-left md:pl-5">
          <h1 className="herotxt text-6xl mb-4">
            Next generation digital banking
          </h1>
          <p className="mb-5 myp">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="bg-[linear-gradient(to_right,hsl(136,65%,51%),hsl(192,70%,51%))] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition duration-300">
            Request Invite
          </button>
        </div>

        <div className="w-5/5 md:w-3/6 bg-[url('/images/bg-intro-mobile.svg')] sm:bg-[url('/images/bg-intro-mobile.svg')] md:bg-[url('/images/bg-intro-desktop.svg')] h-screen bg-cover bg-no-repeat bg-[position:0px_-200px] sm:bg-[position:0px_-100px] md:bg-[position:70px_-200px] ">
          {/* <img
           md:bg-[position:120%_-80px]
            
            src=""
            alt=""
            className="absolute -top-65 -right-150 w-6/6"
          /> */}
          <img
            src="images\image-mockups.png"
            alt=""
            className="md:absolute -top-4 -right-37 lg:absolute md:top-5 md:right-3 xg:-top-50 xl:-right-37 w-6/6 md:w-3/7"
          />
        </div>
      </div>
    </>
  );
};

export default HerosectionDesktop;
