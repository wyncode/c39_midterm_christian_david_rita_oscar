import React from 'react'
import "./AboutUs.css"

const AboutUs =  () => {
  return (
    <div class='Us'>
      <h1>Meet The Team</h1>
      <ul class="the-team">
          <li>
            <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="Image" />
                  <h2>Christian Bonet</h2>
                  <p>
                    Programmer
                  </p>
              </li>
              <li>
                  <img src="https://randomuser.me/api/portraits/women/27.jpg" alt="Image" />
                  <h2>David Ufberg</h2>
                  <p>
                    Programmer
                  </p>
              </li>
              <li>
                  <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="Image" />
                  <h2>Oscar Portes</h2>
                  <p>
                    Programmer
                  </p>
              </li>
              <li>
                  <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Image" />
                  <h2>Rita Mwaikinda</h2>
                  <p>
                    Programmer
                  </p>
              </li>
          </ul>
      </div>
  )
};

export default AboutUs;