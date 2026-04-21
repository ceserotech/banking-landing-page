const HerosectionDesktop = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-0 md:px-0 py-0 gap-10">
        <div className="flex-1 text-center md:text-left md:px-10 lg:px-30">
          <h1 className="herotxt text-3xl md:text-5xl font-bold leading-tight">
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

        <div className="flex-1 flex justify-center md:justify-end w-full px-0 bg-[url('/images/bg-intro-mobile.svg')] sm:bg-[url('/images/bg-intro-mobile.svg')] md:bg-[url('/images/bg-intro-desktop.svg')] bg-cover bg-no-repeat bg-[position:0px_-200px] sm:bg-[position:0px_-100px] md:bg-[position:70px_-200px]">
          {/* <img
           md:bg-[position:120%_-80px]
            
            src=""
            alt=""
            className="absolute -top-65 -right-150 w-6/6"
          /> */}
          <img
            src="images\image-mockups.png"
            alt=""
            className="w-full max-w-sm md:max-w-lg p-0"
          />
        </div>
      </div>
    </>
  );
};

export default HerosectionDesktop;
