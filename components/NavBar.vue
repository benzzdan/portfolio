<!-- components/Navbar.vue -->
<template>
    <nav class="navbar is-black is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item is-paddingless logohome">
            <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" style="padding: 5px;"> -->
            DB
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="#myskills">
              Skills
            </a>
            <a class="navbar-item" href="#aboutme">
              About
            </a>
            <a class="navbar-item" href="#work">
              Work
            </a>
            <span class="navbar-item">
              <a class="button is-warning is-bold has-text-weight-bold" href="mailto:wlobeos@gmail.com">
                <span class="icon">
                  <i class="fa fa-paper-plane"></i>
                </span>
                <span>Contact</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
</template>
<style scope lang="scss">
.is-black {
  background-color: $dark-light !important;
}

</style>
