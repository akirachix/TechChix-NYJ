import './index.css';

const Resumes = () => {
    return(
 <div className='team-section'>
     <h2 className='team'>Our Portfolio</h2>

 <div className='our-team'>
   <div className='images'>
     <div >
        <img src= "/images/Faith.jpg" alt='member-one' id='fay'/>
      <div className='caption'>
         <h5>Faith Munyao</h5>
         <p>Software Developer</p>
         <p><a href='https://faith-s-portfolio-5951fte3h-ada-lab.vercel.app/'>Portfolio</a></p>
        </div>
        </div>
  <div>
    <img src="/images/jango.jpg" alt='member-two' id='mauren'/>
       <div className='caption'>
          <h5>Maureen Njango</h5>
          <p>Software Developer</p>
          <p><a href='https://trialcover.vercel.app/'> Portfolio</a></p>

        </div>
        </div>

  <div>
    <img src="/images/Megan.png" alt='member-three' id='adhiambo'/>
    <div className='caption'>
       <h5>Megan Adhiambo</h5>
        <p>Software Developer</p>
        <p><a href='https://portfolio-fzh7.vercel.app/'>Portfolio</a></p>

        </div>
        </div>
    </div>

  <div className='image-bottom'>
     <div>
        <img src='/images/Loice.png'alt='member-four' id='staice'/>
     <div className='caption'>
       <h5>Loice Staice</h5>
         <p>Software Developer</p>
         <p><a href=''>Portfolio</a></p>

         <p></p>
            </div>
           </div>

   <div>
     <img src='/images/Cynthia.png' alt='member-five' id='nthenya'/>
        <div className='caption'>
         <h5>Cynthia Nthenya</h5>
            <p>Software Developer</p>
            <p><a href=''>Portfolio</a></p>

        </div>
        </div>
        </div>
        </div>
        <div className='footer'>
         <div id='footer-sentence'>
         <p>Follow Us On Social Media</p>
         </div>
         <div className='portfolio-images'>
         <img src = 'images/twitter.svg' alt='' id='portfolio-image'></img>
         <img src = 'images/facebook.svg' alt='' id='portfolio-image'></img>
         <img src = 'images/instagram.svg' alt='' id='insta'></img>
         </div>
         <h9>Copyright @ 2024 Quantum| All Rights Preserved</h9>
         </div>
        </div>
        
      
    )
}

export default Resumes;










        
    