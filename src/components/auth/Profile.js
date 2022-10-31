import React from 'react';
import { Link } from 'react-router-dom';
import { DataStore } from '@aws-amplify/datastore';
import { Amplify, Storage, API, graphqlOperation } from 'aws-amplify';
import { useState, useEffect } from 'react';



// Storage.list('photos/') // for listing ALL files without prefix, pass '' instead
//         .then(result => console.log(result))
//         .catch(err => console.log(err));
const Profile = () => {
  const [images, setImages] =useState([])
  useEffect(() => {
    fetchImages()
  }, [])
  async function fetchImages() {
    let imageKeys = await Storage.list('')
    imageKeys = await Promise.all(imageKeys.map(async k => {
      const signedUrl = await Storage.get(k.key)
      return signedUrl
    }))
    setImages(imageKeys)
  }
  async function onChange(e) {
    const file = e.target.files[0];
    const result = await Storage.put(file.name, file)
    console.log("result: ", result)
    //   {
    //   contentType: 'image/png'
    // }
    
    fetchImages()
  }
  return (
    <section className="profilecontainer">
      <Link to='/profiles' className="btn btn-light">Back To Profiles</Link>
      

      <div className="profile-grid my-1">

        <div className="profile-top bg-primary p-2">
        
      
        
        {
          images.map(image => (
            <img
            className="round-img my-1"
            src={image} key={image}
            alt=""
          />
          ))
        }
          <input className="round-img my-1"
          type="file"
          onChange={onChange}
        />
          <img
            className="round-img my-1"
            src={image} key={image}
            alt=""
          />
          <h1 className="large">John Doe</h1>
          <p className="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p>
          <div className="icons my-1">
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </Link>
             <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
          </div>
        </div>

  
        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">John's Bio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
            neque modi perspiciatis similique?
          </p>
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            <div className="p-1"><i className="fa fa-check"></i> HTML</div>
            <div className="p-1"><i className="fa fa-check"></i> CSS</div>
            <div className="p-1"><i className="fa fa-check"></i> JavaScript</div>
            <div className="p-1"><i className="fa fa-check"></i> Python</div>
            <div className="p-1"><i className="fa fa-check"></i> C#</div>
          </div>
        </div>

        
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          <div>
            <h3 className="text-dark">Microsoft</h3>
            <p>Oct 2011 - Current</p>
            <p><strong>Position: </strong>Senior Developer</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
          <div>
            <h3 className="text-dark">Sun Microsystems</h3>
            <p>Nov 2004 - Nov 2011</p>
            <p><strong>Position: </strong>Systems Admin</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div>

      
        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          <div>
            <h3>University Of Washington</h3>
            <p>Sep 1993 - June 1999</p>
            <p><strong>Degree: </strong>Masters</p>
            <p><strong>Field Of Study: </strong>Computer Science</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div>

        <div className="profile-github">
          <h2 className="text-primary my-1">
            <i className="fab fa-github"></i> Github Repos
          </h2>
          <div className="repo bg-white p-1 my-1">
            <div>
              <h4><Link to="#" target="_blank"
                  rel="noopener noreferrer">Repo One</Link></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laborum!
              </p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">Stars: 44</li>
                <li className="badge badge-dark">Watchers: 21</li>
                <li className="badge badge-light">Forks: 25</li>
              </ul>
            </div>
          </div>
          <div className="repo bg-white p-1 my-1">
            <div>
              <h4><Link to="#" target="_blank"
                  rel="noopener noreferrer">Repo Two</Link></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laborum!
              </p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">Stars: 44</li>
                <li className="badge badge-dark">Watchers: 21</li>
                <li className="badge badge-light">Forks: 25</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile