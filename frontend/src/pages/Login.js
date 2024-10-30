

export default function Login()
{
    return(
        <>
            <div className="h-screen flex flex-col items-center justify-center bg-[#ffb9de]">
                <h1 className="text-5xl font-bold text-center mb-6 text-[#9E4638]">JUST MONIKA</h1>
                <form method="post" action="localhost:3000/login" className="bg-[#FAFAF3] pt-14 p-20 min-w-fit rounded-lg">
                    <label for='name' className='block text-gray-700 text-xl font-bold mb-2 italic'>Name:</label>

                    <input type="text" id='name' placeholder='name' name="title" className="border-2 border-[#ffb9de] min-w-60 focus:outline-none"/>
                    <br/>
                    <label for='name' className='block text-gray-700 text-xl font-bold mb-2 mt-4 italic'>Password:</label> 
                    <input type="password" name="pass" placeholder='password' className="border-2 border-[#ffb9de]  min-w-60  focus:outline-none"/>
                    <br/>
                    <div className="flex justify-center mt-8">
                        <button type="submit" className="w-full text-xl px-4 py-2 bg-blue-500 text-white font-bold italic rounded bg-[#ffaad7]">Login</button>
                    </div>
                 </form>
             </div>
        </>
    );
}