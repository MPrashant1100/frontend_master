import React from 'react'

function Portfolio() {
  return (
    <> 
        <div className='bg-blue-100 max-w-full h-full p-2'>
            <nav className='flex justify-between m-auto p-2 px-2 bg-blue-600 text-white rounded-xl'>
                <div>
                    <h1 className='text-xl font-bold'>Portfolio</h1>
                </div>
                <div className='flex space-x-3'>
                    <h1 className='hover:cursor-pointer'>Home</h1>
                    <h1 className='hover:cursor-pointer'>About</h1>
                    <h1 className='hover:cursor-pointer'>Contact</h1>
                </div>                
            </nav>
            <div className='flex flex-row items-center bg-white m-5 p-5 px-10 h-1/4 w-auto rounded-lg shadow-lg'>
                <div className='basis-1/5'><img className='rounded-full mx-6' src='./images/Pic.jpeg'/></div>
                <div className='basis-4/5 mx-8 shadow'>
                    <h1 className=' text-3xl font-bold mt-5'>Prashant Mishra</h1>
                    <p className='text-xl m-4'>Software Engineer at Accenture</p>
                </div>
            </div>
            <div className='flex flex-row items-center h-1/3 my-10 shadow'>
                <div className='basis-1/4 text-xl font-bold bg-white m-5 w-full h-full p-5 rounded-lg shadow-lg'>Work Experience</div>
                <div className='basis-3/4 bg-white m-5 w-full h-full p-5 rounded-lg shadow-lg'>
                    <ul className='items-start'>
                       <li> Design and develop technologies, software products, or systems to align with business requirements.</li>
                       <li> Create implementation or integration approach for applications and its components.</li>
                       <li> Provide primary support for application releases into production, including deployment plan and schedule.</li>
                       <li> Coordinate and fix defects or performance issues within Service Level Agreements.</li>
                       <li> Analyze, design,build,and/or test new components or enhancements to existing modules.</li>
                       <li> Collaborate with other developers and designers to create user-friendly applications.</li>
                       <li> Create and maintain technical documentation. </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row items-center my-10 shadow-lg'>
                <div className='basis-1/4 text-xl font-bold bg-white m-5 w-full h-full p-5 rounded-lg shadow'>Eduaction</div>
                <div className='basis-3/4 bg-white m-5 w-full h-full p-5 rounded-lg shadow'>
                    <h1 className='font-semibold'>Bachelor of Technology</h1>
                    <p>AKTU Lucknow</p>
                    <h1 className='font-semibold mt-8'>Higher Secondary</h1>
                    <p>CBSE Board</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio