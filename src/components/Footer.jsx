const Footer = () => {
  return (
    <>
      <footer className="bg-[#2d314d] text-white mt-10 px-6 py-20 ">
        <div className="w-10/10 mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between gap-10 px-20">
          {/* LEFT */}
          <div className="w-3/10 flex flex-col justify-around items-center md:items-start gap-10">
                <img src="images\logo-light.svg" alt="" />

                <div className="flex gap-5 justify-center md:justify-baseline">
                <img src="images\icon-facebook.svg" alt="" />
                <img src="images\icon-youtube.svg" alt="" />
                <img src="images\icon-twitter.svg" alt="" />
                <img src="images\icon-pinterest.svg" alt="" />
                <img src="images\icon-instagram.svg" alt="" />
                </div>
          </div>

          {/* LINKS */}
          <div className="w-3/10 flex flex-col justify-around md:flex-row gap-10 text-center md:text-left">
            <ul className="space-y-6">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>

            <ul className="space-y-6">
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="w-10/10 md:w-3/10  flex justify-around flex-col items-center md:items-end gap-6">
            <button className="bg-gradient-to-r from-green-400 to-cyan-400 px-6 py-2 rounded-full">
              Request Invite
            </button>

            <p className="text-sm text-gray-400">
              ©Digitalbank. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
