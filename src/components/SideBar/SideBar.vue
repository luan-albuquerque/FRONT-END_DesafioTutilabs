<template>
<div>
  <div class="container-fluid">
      <div class="row">
        <nav class="cmw d-none d-md-block bg-94ba65 sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <button class="nav-link " @click="() => this.$router.push({ path: '/home' })" >
                  <span data-feather="home"></span>
                  Home 
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" @click="() => this.$router.push({ path: '/collaborators' })">
                  <span data-feather="file"></span>
                  Colaboradores 
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" @click="() => this.$router.push({ path: '/department' })">
                  <span data-feather="shopping-cart"></span>
                  Departamentos
                </button>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>


button{
    background: transparent;
    border: transparent;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #fff;
}


.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #484849;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

/*
 * Utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
.bg-94ba65{
  background-color: #94ba65;
}
  @media (min-width: 768px)
  {
    .row .cmw {
      flex: 0 0 auto;
      width: 16%;
  }
  }
</style>