import React from 'react';
import Header from './Header';

const Admin = () => {
  return (
    <div className="absolute">
      <Header/>
      {/* <div className="absolute h-screen  inset-0">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/019/011/154/small_2x/abstract-watercolor-paint-background-beautiful-blue-green-and-yellow-watercolor-splash-design-colorful-plain-green-tones-watercolor-textures-paper-textured-aquarelle-canvas-for-modern-creative-design-vector.jpg"
          alt="bg"
          className="w-screen h-screen object-cover"
        />
      </div> */}
       {/* Text Section */}
       <div className="w-full h-72 pt-28 pl-20 relative flex justify-between bg-opacity-80 rounded-lg text-xl font-bold">
          <p>
            New Homio is a thoughtfully designed platform aimed at simplifying the process of relocating and settling into a new city. Recognizing the unique challenges that people face when they move, New Homio connects users to essential resources and services, making it easy to find nearby hostels, mess services, grocery shops, and other everyday necessities. The website offers a user-friendly interface with components like Home, Services, and Help that guide users to the information they need quickly and intuitively. With a focus on community and ease of access, New Homio aims to reduce the stress of adjusting to new surroundings by providing reliable information and convenient solutions all in one place.
            <br/><br/>
            One of New Homio’s standout features is its future integration of a payment gateway, offering users a streamlined way to make payments for services and utilities. This additional functionality will enable users to complete transactions directly on the site, enhancing convenience and making New Homio a one-stop solution. Designed with a warm, welcoming aesthetic, the website ensures that anyone moving to a new city feels at home faster. New Homio provides a valuable digital space for finding essential local services, helping users settle in with ease and confidence.
          </p>
          <div className='mr-8'>  <div className="ml-24 rounded-xl">
                  <img
                    src="https://mediaim.expedia.com/destination/1/2d75301e5fa5840846672492693f1fb3.jpg"
                    alt="New Homio"
                    className="rounded-xl shadow-2xl"
                  />
         </div>
         <div className=" ml-20 mt-32 rounded-xl">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/1200px-Indore_Rajwada01.jpg"
                    alt="New Homio"
                    className="rounded-xl shadow-2xl"
                  />
         </div>
         <div className=" ml-20 mt-32 rounded-xl">
                  <img
                    src="https://media.istockphoto.com/id/1283363191/photo/views-of-slums-on-the-shores-of-mumbai-india-against-the-backdrop-of-skyscrapers-under.jpg?s=612x612&w=0&k=20&c=vtj11JIJtkO2XGLZX1PdsQhy3kFfTwz3Z5H-THc0ScU="
                    alt="New Homio"
                    className="rounded-xl shadow-2xl"
                  />
         </div>
         </div>
        </div>


      <div className=" flex justify-between items-start ml-40 p-8 space-x-8 mt-80">
        {/* Form Section */}
        <div className="w-3/6 p-6 mr-36 rounded-lg border-2 shadow-md">
          <p className="text-xl font-bold underline mb-4 text-center">Welcome Admin ,Register Here!</p>
        
          <form className="space-y-6 text-black">
            <input type="text" className=" w-3/6 p-3 font-bold rounded-lg" placeholder="Enter First Name" />
            <input type="text" className=" w-3/6 p-3 font-bold rounded-lg" placeholder="Enter Last Name" />
            <input type="text" className="w-full p-3 font-bold rounded-lg" placeholder="Enter Your Email Id" />
            <input type="password" className="w-full p-3 font-bold rounded-lg" placeholder="Enter Password" />
            <input type="text" className="w-full p-3  font-bold rounded-lg" placeholder="Enter Service" />
            <input type="text" className="w-full p-3 font-bold rounded-lg" placeholder="Enter City" />
            <input type="text" className="w-full p-3 font-bold rounded-lg" placeholder="Exact Location"/>
            <input type="text" className="w-full p-3 font-bold rounded-lg" placeholder="Enter Pin code" />
            <input type="file" className="w-full p-3 font-bold rounded-lg" placeholder="Upload Image" />
            <button className="w-full p-3 mt-4 bg-blue-300 rounded-lg font-bold">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
