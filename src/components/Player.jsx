import logo from "../assets/logo.jpg";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoCutSharp } from "react-icons/io5";

const Player = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <iframe
          width="766"
          height="431"
          src="https://www.youtube.com/embed/SqcY0GlETPk?si=3jetUmDlkmuhN1KW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <h1 className="flex font-bold text-[20px] justify-center relative right-[253px]">
        React Tutorial for Beginners
      </h1>
      <div className="flex justify-center">
        <img
          src={logo}
          alt="React Tutorial for Beginners"
          className="w-[40px] h-[40px] rounded-3xl relative right-[32px] cursor-pointer"
        />
        <div className="">
          <a
            href="#"
            className="text-[16px] font-semibold relative right-[28px]"
          >
            Programming With Mosh
          </a>
          <p className="text-[12px] relative right-[28px]">3.73M subscribers</p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center bg-black w-[94.56px] h-[36px] text-white rounded-3xl text-[14px] font-semibold relative right-[10px] hover:bg-[#1E1E1E] "
        >
          Subscribe
        </a>
        <div className="flex justify-center">
          <span className="flex items-center justify-around bg-[#E5E5E5] relative left-[20px] w-[80.75px] h-[36px] rounded-l-xl cursor-pointer hover:bg-[#d0d0d0]">
            <BiLike size={25} />
            <p className="font-normal relative cursor-pointer right-[10px]">
              35K
            </p>
          </span>
          <span className="flex items-center justify-center bg-[#E5E5E5] relative left-[10px] w-[52px] h-[36px] rounded-r-xl cursor-pointer hover:bg-[#d0d0d0]">
            <BiDislike size={25} />
          </span>
        </div>
        <div className="flex justify-center w-[92.11px] h-[36px] items-center bg-[#E5E5E5] relative left-[20px] rounded-xl font-semibold cursor-pointer hover:bg-[#d0d0d0]">
          <PiShareFatThin size={25} />
          <p>Share</p>
        </div>
        <div className="flex justify-center w-[118.34px] h-[36px] items-center bg-[#E5E5E5] relative left-[30px] rounded-xl font-semibold cursor-pointer hover:bg-[#d0d0d0]">
          <LiaDownloadSolid size={25} />
          <p>Download</p>
        </div>
        <div className="flex justify-center  w-[36px] h-[36px]  items-center bg-[#E5E5E5] relative left-[40px] rounded-xl font-semibold cursor-pointer hover:bg-[#d0d0d0]">
          <p>...</p>
        </div>
      </div>
    </>
  );
};

export default Player;
