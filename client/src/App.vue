<template>
  <div id="app">
    <header class="hf">
      <div class="const">
        <div class="center flex items-center justify-center w-full">
          <span class="flogo text-xl md:text-3xl">YouTube Downloader</span>
        </div>
      </div>
    </header>

    <main class="const mt-4">
      <router-view />
    </main>

    <footer class="hf bottom-0 absolute flex items-center justify-center">
      <ul>
      <li>
        <a href="https://www.facebook.com/rantayar/">
          <i class="fa fa-facebook icon"></i>
        </a>
      </li>
      <li>
        <a href="http://twitter.com/tgmrp"><i class="fa fa-twitter icon"></i></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/rantayar/"><i class="fa fa-linkedin icon"></i></a>
      </li>
      <li>
        <a href="https://github.com/TgMrP"><i class="fa fa-github icon"></i></a>
      </li>
    </ul>
    </footer>
  </div>
</template>

<style lang="scss">
.hf {
  @apply w-full bg-youtube-500 h-16 text-red-500;
}

ul {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

ul li {
  list-style: none;
}

ul li a {
  width: 50px;
  height: 50px;
  background-color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #262626;
  transition: .5s;
  z-index: 3;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: .5s;
  z-index: 2;
}

ul li a:hover:before {
  top: 0;
}

ul li:nth-child(1) a:before{
  background: #3b5999;
}

ul li:nth-child(2) a:before{
  background: #55acee;
}

ul li:nth-child(3) a:before {
  background: #0077b5;
}

ul li:nth-child(4) a:before {
  background: #211F1F;
}
</style>
