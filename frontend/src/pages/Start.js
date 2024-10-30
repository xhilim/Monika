import Monika from '../img/Monika.png'//Monika from DDLC


export default function Start()
{
    return(
        <>
          <div className="h-screen flex flex-row items-center justify-center bg-[#ffb9de] ">
            <img src={Monika} alt='Monika' className=' min-h-80 h-screen hidden sm:inline '/>
            <div className='flex flex-col items-center bg-[#FAFAF3] rounded-lg'>
              <h1 className="text-5xl font-bold text-center pt-5 mb-6 text-[#9E4638]">JUST MONIKA</h1>
              <div  className=" pt-14 p-16 min-w-fit rounded-lg flex flex-row">
        
                <a href='/signup'><button className=" text-xl px-4 py-2 bg-blue-500 text-white font-bold italic rounded bg-[#ffaad7]">First Time</button></a>
                <a href='/login'><button className=" ml-10 text-xl px-4 py-2 bg-blue-500 text-white font-bold italic rounded bg-[#ffaad7]">Returning lover</button></a>
              </div>
            </div>
          </div>
    
        </>
    )
}