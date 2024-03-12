import React from 'react'

export const Home = () => {
  return (
    <div>
         <div className="container-fluid position-relative p-0">
       
       
     </div>

     {/* about  */}
  
     <div className="container-fluid about py-5">
     <div className="container py-5">
       <div className="row g-5 align-items-center">
         <div className="col-lg-5">
            <div className="h-100 about-section-1-img" >
             <img src='src/assets/about-img.jpg' className="img-fluid w-100 h-100" alt="About Us" />
           </div>  
         </div>
          <div className="col-lg-7 about-section-1-content"> 
           {/* <h5 className="section-about-title pe-3">About Us</h5> */}
           <h1 className="mb-4">Welcome to <span className="text-primary">Travel</span></h1>
           <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
           <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
           <div className="row gy-2 gx-4 mb-4">
             <div className="col-sm-6">
               <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
             </div>
             {/* Add other list items here */}
           </div>
           <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Read More</a>
          </div> 
       </div>
     </div>
   </div>
 


 {/* service  */}
     <div className="container-fluid bg-light service py-5">
    
 <div className="container py-5">
     <div className="mx-auto text-center mb-5" >
         <h5 className="section-title px-3">Searvices</h5>
         <h1 className="mb-0">Our Services</h1>
     </div>
     <div className="row g-4">
         <div className="col-6">
             <div
                 className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                 <div className="service-content text-end">
                     <h5 className="mb-4">Tours</h5>
                     <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit
                         expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore
                         consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                     </p>
                 </div>
                 <div className="service-icon p-4">
                     <i className="fa fa-globe fa-4x text-primary"></i>
                 </div>
             </div>
         </div>
         <div className="col-6">
             <div
                 className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                 <div className="service-content text-end">
                     <h5 className="mb-4">Tours</h5>
                     <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit
                         expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore
                         consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                     </p>
                 </div>
                 <div className="service-icon p-4">
                     <i className="fa fa-hotel fa-4x text-primary"></i>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <div className="col-12">
     <div className="text-center">
         <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Service More</a>
     </div>
 </div>

     </div>
    </div>
  )
}
