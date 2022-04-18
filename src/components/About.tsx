import Abouts from "./images/about.jpg"

export const About = () => {

        return(
            <div className="w-[100%] h-screen flex ">
                <div className="w-2/4 h-screen bg-[#141414]">
                    <div className="font-Anton text-white text-7xl tracking-wides ml-28 flex flex-row" >
                        <p className="underline underline-offset-8 mt-9 decoration-[#e50914]">A</p><p className="mt-9">bout</p>
                    </div>             

                    <div className=" flex justify-center items-center w-[100%] mt-12"> 
                    
                    <div className="w-[400px] h-[100%]">
                    <img src={Abouts} alt="" className="bg-cover"></img>
                    </div>
                        
                    </div>
                </div>


                <div className="w-2/4 h-screen bg-[#141414]">
                <div className="ml-10 mt-60 ">
                    <div className="font-Anton text-[#e50914] text-2xl tracking-wider">SKILLS AKHADA</div>
                    <div className="font-Anton text-white text-3xl tracking-wide mt-3"><p>A PLACE FOR PROFESSIONAL GAMERS FOR <br /> ESPORTS TOURNAMENT INDIA.</p></div>
                  
                    <div className="text-white opacity-[0.5] mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi<br /> 
                    voluptatem deserunt ipsam culpa, obcaecati unde quo dignissimos <br />  
                    cumut rem? Fuga commodi, cumque voluptate. Cupiditate.<br /><br />
                    orem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugit <br />  incidunt 
                    rem laboriosam, voluptas, eaque.</div>
                    <div className="absolute w-40 h-[50px] bg-[#e50914] rounded-l-[30px] rounded-r-[30px] mt-10 flex justify-center items-center cursor-pointer hover:bg-[#c40913] transition duration-300 ease-in-out">
                        <p className="text-white font-Anton">Join Community </p>
                    </div>
                </div>
                </div>          
            </div>
        );
}