import join from "./images/join-bg.png"

export const Join = () => {
    return(
        <div className="w-[100%] h-screen bg-[#141414] flex justify-center items-center">
            <div className="w-[80%] h-[400px] rounded-xl flex">

                <div className="w-2/4 h-[100%] bg-[#181c1c] rounded-l-xl">
                <div className="ml-10 mt-20">
                    <div className="font-Anton text-[#e50914] text-1xl tracking-widest">LET'S PLAY TOGETHER</div>
                    <div className="font-Anton text-white text-3xl tracking-wide mt-3 leading-10"><p>JOIN GAMIX ESPORTS TO BECOME <br />NEXT PRO GAMER TODAY!</p></div>
                  
                    <div className="text-white opacity-[0.5] mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi<br /> 
                    voluptatem deserunt ipsam culpa, obcaecati unde quo dignissimos.</div>
                    <div className="absolute w-40 h-[50px] bg-[#e50914] rounded-l-[30px] rounded-r-[30px] mt-10 flex justify-center items-center cursor-pointer hover:bg-[#c40913] transition duration-300 ease-in-out">
                        <p className="text-white font-Anton">Join Community</p>
                    </div>
                </div>
                </div>
                <div className="w-2/4 h-[100%] bg-[#181c1c]  rounded-r-xl relative justify-center flex">
                    <img src={join} alt='' className=" absolute bottom-0 w-[420px]"/>
                </div>
            </div>

        </div>
    );
}