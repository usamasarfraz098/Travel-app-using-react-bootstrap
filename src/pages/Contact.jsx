import React from 'react'

export const Contact = () => {
  return (
    <div>
         <div className="container-fluid position-relative p-0">
            
        </div>
        <div className="container-fluid contact bg-light py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5">
                    <h5 className="section-title px-3">Contact Us</h5>
                    <h1 className="mb-0">Contact For Any Query</h1>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-4">
                        <div className="bg-white rounded p-4">
                            <div className="text-center mb-4">
                                <i className="fa fa-map-marker-alt fa-3x text-primary"></i>
                                <h4 className="text-primary"></h4>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, accusantium!</p>
                            </div>
                            <div className="text-center mb-4">
                                <i className="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                                <h4 className="text-primary">Mobile</h4>
                                <p className="mb-0">**********</p>
                                <p className="mb-0">**********</p>
                            </div>
                           
                            <div className="text-center">
                                <i className="fa fa-envelope-open fa-3x text-primary mb-3"></i>
                                <h4 className="text-primary">Email</h4>
                                <p className="mb-0">Lorem ipsum dolor sit.</p>
                                <p className="mb-0">Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h3 className="mb-2">Send us a message</h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate animi modi atque autem? Odit tenetur animi perspiciatis distinctio quo id.</p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control border-0" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control border-0" placeholder="Leave a message here" id="message"></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
