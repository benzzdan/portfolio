<!-- pages/index.vue -->

<template>
<div>
    <section id="intro" class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="header__heading heading in-left">Hi, I am
                <span class="highlight2" style="--nth: 1">
                  <span class="highlight__inner">Daniel Benson</span>
                </span><div class="push"></div>
              </h1>
              <h1 class="header__heading heading in-left2">
                <span class="highlight3" style="--nth: 1">
                  <span class="highlight__inner">Full Stack</span>
                </span> Web Developer
              </h1>
              <div class="push"></div>
              <div class="push"></div>
              <h2 class="subtitle in-right" style="max-width: 700px">
                A system administrator with development skills, I love creating new stuff and learning new technologies on the way.
                I develop and design fully responsive web applications, always looking for the details to make the best solution.
                <div class="push"></div>
                <div class="push"></div>
                <div class="push"></div>
                <a class="button more-info" href="#aboutme">More about me</a>
              </h2>
            </div>
            <div class="column">
              <SvgComputer/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="skillset" class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 id="myskills" class="has-text-centered titles">My Skills</h1>
          <!-- <div class="push-medium"></div> -->
          <div class="skill-list has-text-centered">
            <div class="columns">
              <div class="column">
                <p class="skill-item">JavaScript</p>
              </div>
              <div class="column"><progress data-progress="80" id="prog-js" class="skill-item-progress progress" value="0" max="100">80%</progress>
              </div>
              <div class="column">
                <p class="skill-item-right">VueJS</p>
              </div>
              <div class="column"><progress data-progress="70"  class="skill-item-progress progress progress-right" value="0" max="100">70%</progress></div>
            </div>
            <div class="columns">
              <div class="column">
                <p class="skill-item">HTML</p>
              </div>
              <div class="column"><progress data-progress="100" class="skill-item-progress progress" value="0" max="100">100%</progress>
              </div>
              <div class="column">
                <p class="skill-item-right">CSS</p>
              </div>
              <div class="column"><progress data-progress="100" class="skill-item-progress progress progress-right" value="0" max="100">100%</progress>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p class="skill-item">PHP</p>
              </div>
              <div class="column"><progress data-progress="80" class="skill-item-progress progress" value="0" max="100">80%</progress>
              </div>
              <div class="column">
                <p class="skill-item-right">Laravel</p>
              </div>
              <div class="column"><progress data-progress="70" class="skill-item-progress progress progress-right" value="0" max="100">70%</progress>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p class="skill-item">Node.js</p>
              </div>
              <div class="column"><progress data-progress="50" class="skill-item-progress progress" value="0" max="100">50%</progress>
              </div>
              <div class="column">
                <p class="skill-item-right">Jquery</p>
              </div>
              <div class="column"><progress data-progress="90" class="skill-item-progress progress progress-right" value="0" max="100">90%</progress>
              </div>
            </div>

          </div>

          <div id="aboutcolumns" class="columns">
            <div class="column">
              <h1 id="aboutme" class="titles" style="padding-bottom: 10vh">About me</h1>
              <p id="aboutme-p">
                Hi my name is Daniel, I am a DevOps / Full Stack Developer who loves creating always new applications for great people, I love to eat new food and travel to new places with my wife, I love taking photgraphs of awesome buildings and sites.
                I spent each day trying to get more knowledge and become better on what I love to do.... code.
              </p>
              <!-- <div id="aboutimg" class="image"></div> -->

            </div>
            <div class="column">
              <!-- <div id="aboutimg" class="image"></div> -->
              <div class="push-medium"></div>
              <!-- <div id="aboutimg" class="mifoto image"></div> -->
              <img id="aboutimg" src="../static/images/mifoto6.gif" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="work" class="hero is-medium is-dark-white">
      <div id="animline"></div>
      <div class="hero-body">
        <div class="container">
          <h1 id="work-title" class="work-title has-text-centered" style="color: #0099ff">Work</h1>
          <div id="animline2"></div>
          <div class="h30vh"></div>
          <div class="portfolio-section chop">
            <h1 class="portfolio-caption-title">Chop</h1>
            <h2 class="portfolio-caption-subtitle">Ecommerce web solution for dog food vendor</h2>
            <a href="https://croquetaschop.com/" class="portfolio-button button is-info" target="_blank">Visit Site  </a>
          </div>
          <div class="portfolio-section codigo-ub" style="margin: 10% 0%">
              <h1 class="portfolio-caption-title">Codigo UB</h1>
            <h2 class="portfolio-caption-subtitle">Architecture firm landing page</h2>
            <a href="http://codigoub.com.mx" class="portfolio-button button is-info" target="_blank">Visit Site  </a>
          </div>
          <div class="portfolio-section greenpeach">
              <h1 class="portfolio-caption-title">Greenpeach</h1>
              <h2 class="portfolio-caption-subtitle">Ecommerce web solution for healthy food vendor</h2>
              <a href="https://greenpeach.mx" class="portfolio-button button is-info" target="_blank">Visit Site  </a>
          </div>
        </div>
      </div>
      <footer class="footer bg-dark">
         <div class="columns">
           <div class="column has-text-centered" style="border-right: 2px solid white;">
             <div class="heading has-text-centered">
               Have an idea?
             </div>
             <h2 class="subtitle has-text-centered" style="color: #ffff">Lets make it reality</h2>
             <a href="mailto:wlobeos@gmail.com"><i class="icon-envelope mail-footer"></i></a>
           </div>
           <div class="column" style="margin: auto 0;text-align: center;">
              <div class="social">
                <a href="https://github.com/benzzdan" target="_blank"><i id="github" class="icon-github"></i></a>
                <a href="https://www.linkedin.com/in/daniel-benson-296684ab/" target="_blank"><i id="linkedin" class="icon-linkedin-sign"></i></a>
                <i id="code" class="icon-code"></i>
                <!-- <i id="mail" class="icon-envelope"></i> -->
              </div>
           </div>
         </div>
         <div class="field has-text-centered" style="margin-top: 12vh">
           <small>Build by Daniel Benson &copy; 2018</small>
         </div>
      </footer>
    </section>

</div>
</template>


<script>

  import SvgComputer from '../components/SvgComputer'

  export default {
        components: {
          SvgComputer
        },
        head: {
          script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js'},
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js'},
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/ScrollToPlugin.min.js'},
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js'},
          ]
        }
    }

</script>

<style scope lang="scss">
.is-dark-white {
  background-color: $dark-white;
}

</style>



