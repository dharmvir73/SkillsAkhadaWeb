import Banner  from "./images/banner.png";
import {Particle} from "./Particles-config"
import YT from "./images/Youtube.png";
import Insta from "./images/Instagram.png"
import FB from "./images/facebook.png"
import TextTransition, { presets } from "react-text-transition";
import React from "react";

const TEXTS = [
    "Community",
    "Player Battles",
    "Tournaments",
    "Earn Money",
  ];

export const Intro = () => {

        const [index, setIndex] = React.useState(0);
      
        React.useEffect(() => {
          const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            4000 // every 4 seconds
          );
          return () => clearTimeout(intervalId);
        }, []);


    return(
        
        <div className="w-[100%] h-[115vh] bg-[#141414] flex flex-row relative">
               
             <div className="opacity-[0.4]">
             <Particle />
             </div>
            <div className="w-2/4 h-[100%] relative">       
                <div className="w-56 h-56 bg-[#e50914] rounded-full ml-20 mt-[200px] absolute"></div>
                <div className="w-10 h-10 bg-[#e50914] rounded-full ml-14 mt-[180px] absolute"></div>
                <img src={Banner} alt="" className="h-[650px] ml-32 absolute bottom-0" />
                <div className="w-24 h-24 mt-[500px] ml-60 bg-white hover:bg-[#e50914] transition duration-300 ease-out rounded-full flex justify-center items-center relative cursor-pointer">
                <div className="w-1 h-1 border-[15px] ml-[20px] border-l-[#e50914] border-t-transparent border-b-transparent border-r-transparent absolute"></div>
                </div>
            <div className="w-60 flex justify-between opacity-[0.5] rotate-90 ml-[-95px] mt-[-240px]">
               <span><p className="font-Anton opacity-[0.5] text-10 tracking-wider text-white ">Follow us</p></span>
               <span className=" opacity-[0.5] hover:rotate-[-90deg] hover:opacity-[100%] transition duration-300 ease-in-out cursor-pointer"><img src={YT} alt=""/></span>
               <span className="opacity-[0.5] hover:rotate-[-90deg] hover:opacity-[100%] transition duration-300 ease-in-out cursor-pointer"><img src={Insta} alt=""/></span>
               <span className="opacity-[0.5] hover:rotate-[-90deg] hover:opacity-[100%] transition duration-300 ease-in-out cursor-pointer"><img src={FB} alt="" /></span>
            </div>

            </div>
           
            <div className="w-2/4 h-[100%] ">
                <div className="ml-20 mt-60">
                    <div className="font-Anton text-white text-8xl tracking-wide"><p>Gaming</p></div>
                    <div className="font-Anton text-white text-8xl mt-4"><p>
                        <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.gentle }
                            /></p></div>
                    <div className="text-white mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Est sequi voluptate quisquam sed laborum ratione consequatur, deleniti, aut fuga similique 
                    labore explicabo quo, ab commodi veniam possimus minus? Consequatur, earum?</div>
                    <div className="absolute w-40 h-[50px] bg-[#e50914] rounded-l-[30px] rounded-r-[30px] mt-10 flex justify-center items-center cursor-pointer hover:bg-[#c40913] transition duration-300 ease-in-out">
                        <p className="text-white font-Anton">Join Community </p>
                    </div>
                </div>
            </div>           
          
        </div>
    );
}