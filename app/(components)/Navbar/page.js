"use client"
 import React, { Component } from 'react';
 import Image from 'next/image';
 import menu from '../photos/menu.png'
 import admin_login from "../photos/software-engineer.png"
import home from "../photos/house.png"
import my_account from "../photos/profile.png"
import post from "../photos/building.png"
import about from "../photos/communications.png"
import contact from "../photos/contact-us.png"
import rate from "../photos/rate.png"
import terms from "../photos/terms-and-conditions.png"
import logout from "../photos/logout.png"
import cancel from "../photos/cancel.png"


 class MyComponent extends Component {
   componentDidMount() {
   
   }
   render() {
    function ToggleMe(){
      var element = document.getElementById("myDIV");
      element.classList.toggle("mystyle");
    }

     return (
      <div id="myElement">
      <div className="nav bg-cyan-400 p-4 flex flex-row justify-between">
       <div className="menu_logo flex flex-row items-center gap-4"
       onClick={ToggleMe}>
         <Image src={menu} alt=''className='h-10 w-10'></Image>
         <div className="comapny_name text-white capitalize text-2xl">super mall</div>
       </div>
       <div className="admin_logo flex items-center capitalize">
        <Image alt=' ' src={admin_login} className='h-10 w-10' ></Image>
       </div>
     </div>
     {/* the list  */}
      <div className="the_list hidden bg-cyan-200 py-8 px-4 w-5/6 sm:w-1/2 h-96  flex flex-col  " id='myDIV'>
      <div className="cancel w-full  ">
          <Image alt='' src={cancel} className='h-8 w-8 float-right '
          onClick={ToggleMe} id='close'></Image>
        </div>
         <div className="navpage capitalize flex flex-col gap-3 ">
          <a href="../Nav_list/Home" target='_blank' className='flex flex-row gap-2' >
          <Image src={home} alt='homepage' className='h-6 w-6'></Image>
          <p className='pt-0.5'>home</p>
          </a>
          <a href="../Nav_list/my_account" target='_blank' className='flex flex-row gap-2'>
          <Image src={my_account} alt='homepage' className='h-6 w-6'></Image>
          <p className='pt-0.5'>my account</p>
          </a>
          <a href="../Nav_list/post" target='_blank' className='flex flex-row gap-2'>
          <Image src={post} alt='homepage' className='h-6 w-6'></Image>
          <p className='pt-0.5'>post products</p>
          </a>
          <a href="../Nav_list/about" target='_blank'className='flex flex-row gap-2' >
          <Image src={about} alt='homepage' className='h-6 w-6'></Image>
          <p className='pt-0.5'>about us</p>
          </a>
          <a href="../Nav_list/contact" target='_blank' className='flex flex-row gap-2'>
          <Image src={contact} alt='homepage' className='h-6 w-6'></Image>
          <p className='pt-0.5'>contact us</p>
          </a>
          <a href="../Nav_list/rate" target='_blank' className='flex flex-row gap-2'>
          <Image src={rate} alt='homepage' className='h-6 w-6'></Image>
          <p className='pt-0.5'>rate us</p>
          </a>
          <a href="../Nav_list/terms" target='_blank' className='flex flex-row gap-2'>
          <Image src={terms} alt='homepage' className='h-6 w-6'></Image>
          <p className='pt-0.5'>terms & conditions</p>
          </a>
          <a href="../Nav_list/logout" target='_blank' className='flex flex-row gap-2 '>
          <Image src={logout} alt='homepage' className='h-6 w-6'></Image>
          <p className='pt-0.5'>logout</p>
          </a>
         </div>
       </div>
   </div>
     );
   }
 }
 
 export default MyComponent;
