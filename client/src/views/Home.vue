<template>
  <div class="mt-12">
    <div v-if="error" class="text-center mb-6 text-red-500 text-2xl">
      {{ error }}
    </div>
    <form class="" @submit.prevent="download">
      <div class="flex justify-center">
        <span class="mb-4 text-2xl md:text-4xl">Youtube ID / Link</span>
      </div>
      <div class="flex justify-center text-2xl md:text-4xl">
        <label for="link"><i class="fa fa-youtube-play text-4xl md:text-6xl"></i></label>
        <input
          type="text"
          id="title"
          name="title"
          v-model="url"
          class="ml-4 border border-youtube-500 rounded-lg px-4 py-2 text-base md:text-4xl"
          placeholder="https://youtube.com/watch?v="
        >
      </div>
      <div class="flex justify-center mt-10">
        <div class="button" :class="{active : type === 'mp3'}" @click="type='mp3'">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-8 w-8 md:h-12 md:w-12" viewBox="0 0 548.291 548.291"><path d="M486.201 196.121h-13.166v-63.525c0-.399-.062-.795-.115-1.2-.021-2.522-.825-5-2.552-6.96L364.657 3.675c-.033-.031-.064-.042-.085-.073-.63-.704-1.364-1.292-2.143-1.796a11.29 11.29 0 00-2.823-1.312c-.2-.052-.379-.134-.577-.188A10.793 10.793 0 00356.562 0H96.757C84.894 0 75.256 9.649 75.256 21.502v174.613H62.092c-16.971 0-30.732 13.756-30.732 30.73v159.81c0 16.966 13.761 30.736 30.732 30.736h13.164V526.79c0 11.854 9.638 21.501 21.501 21.501h354.776c11.853 0 21.501-9.647 21.501-21.501V417.392H486.2c16.966 0 30.729-13.764 30.729-30.731v-159.81c.001-16.974-13.762-30.73-30.728-30.73zM96.757 21.507h249.054v110.006c0 5.94 4.817 10.751 10.751 10.751h94.972v53.861H96.757V21.507zm280.167 252.358c0 14.308-4.783 26.471-13.454 34.706-11.287 10.646-27.995 15.413-47.523 15.413-4.342 0-8.248-.221-11.281-.642v52.279h-32.783V231.336c10.21-1.753 24.53-3.054 44.709-3.054 20.395 0 34.93 3.917 44.704 11.74 9.339 7.365 15.628 19.512 15.628 33.843zM85.035 375.622l9.331-146.238h44.045l14.326 48.819c4.565 16.919 9.113 35.15 12.37 52.289h.662c4.12-16.924 9.11-36.22 13.884-52.499l15.625-48.609h43.182l8.024 146.238h-32.321l-2.173-55.969c-.661-17.579-1.304-38.861-1.304-60.119h-.646c-4.564 18.669-10.637 39.499-16.286 56.649l-17.782 57.062h-25.825l-15.625-56.651c-4.769-17.135-9.77-37.965-13.236-57.06h-.441c-.863 19.752-1.514 42.309-2.596 60.539l-2.611 55.549H85.035zm366.499 145.346H96.757V417.392h354.776v103.576zm-17.74-142.958c-18.24 0-33.643-4.766-41.889-9.968l6.734-24.751c5.854 3.044 19.308 8.672 32.768 8.672 17.135 0 25.816-8.242 25.816-18.867 0-13.88-13.891-20.188-28.432-20.188h-13.459v-23.654h12.813c11.062-.2 25.177-4.325 25.177-16.271 0-8.459-6.95-14.737-20.835-14.737-11.502 0-23.653 4.986-29.512 8.459l-6.721-23.882c8.463-5.417 25.377-10.627 43.618-10.627 30.157 0 46.871 15.843 46.871 35.161 0 14.958-8.472 26.686-25.826 32.758v.441c16.935 3.04 30.609 15.827 30.609 34.278-.013 24.951-21.93 43.176-57.732 43.176z"/><path d="M318.325 253.255c-6.72 0-11.281.641-13.659 1.291v43.18c2.819.64 6.3.871 11.065.871 17.575 0 28.437-8.903 28.437-23.885-.006-13.435-9.339-21.457-25.843-21.457z"/></svg>
        </div>
        <div class="button" :class="{active : type === 'mp4'}" @click="type='mp4'">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-8 w-8 md:h-12 md:w-12" viewBox="0 0 550.801 550.801"><path d="M421.628 290.535l-19.591 31.968v.453H434.9v-32.421c0-8.775.454-17.785 1.129-27.24h-.896c-4.725 9.455-8.559 18.001-13.505 27.24z"/><path d="M488.426 197.019H475.2v-63.816c0-.398-.063-.799-.116-1.202-.021-2.534-.827-5.023-2.562-6.995L366.325 3.694c-.032-.031-.063-.042-.085-.076-.633-.707-1.371-1.295-2.151-1.804a9.495 9.495 0 00-.706-.419 11.131 11.131 0 00-2.131-.896c-.2-.056-.38-.138-.58-.19A10.774 10.774 0 00358.193 0H97.2C85.282 0 75.6 9.693 75.6 21.601v175.413H62.377c-17.049 0-30.873 13.818-30.873 30.873v160.545c0 17.043 13.824 30.87 30.873 30.87h13.224V529.2c0 11.907 9.682 21.601 21.6 21.601h356.4c11.907 0 21.6-9.693 21.6-21.601V419.302h13.226c17.044 0 30.871-13.827 30.871-30.87v-160.54c-.001-17.054-13.828-30.873-30.872-30.873zM97.2 21.605h250.193v110.513c0 5.967 4.841 10.8 10.8 10.8H453.6v54.108H97.2V21.605zm260.688 256.327c0 14.85-4.957 27.453-13.954 36.007-11.707 11.043-29.035 15.989-49.307 15.989-4.503 0-8.553-.222-11.696-.675v54.242h-34.006V233.801c10.584-1.804 25.439-3.161 46.378-3.161 21.167 0 36.238 4.058 46.385 12.168 9.671 7.646 16.2 20.255 16.2 35.124zM92.67 263.063h-.458c-.892 20.479-1.566 43.903-2.7 62.814l-2.684 57.628H55.065l9.688-151.725h45.705l14.85 50.654c4.73 17.561 9.456 36.471 12.841 54.253h.675c4.261-17.561 9.455-37.6 14.402-54.475l16.216-50.433h44.8l8.332 151.725h-33.552l-2.247-58.082c-.686-18.225-1.35-40.299-1.35-62.355h-.675c-4.725 19.367-11.037 40.988-16.891 58.77l-18.462 59.211h-26.789l-16.206-58.768c-4.957-17.792-10.125-39.402-13.732-59.217zm360.931 260.29H97.2V419.302h356.4v104.051zm31.287-174.736h-17.571v34.889H434.9v-34.889h-64.831v-22.286l55.376-89.15h41.871v85.775h17.571v25.661z"/><path d="M297.096 256.54c-6.972 0-11.697.675-14.165 1.345v44.801c2.911.675 6.519.906 11.476.906 18.235 0 29.488-9.229 29.488-24.774 0-13.946-9.682-22.278-26.799-22.278z"/></svg>        </div>
      </div>
       <div class="flex justify-center mt-10">
        <button
          :disabled="!canDownload"
          class="
            px-6 py-4
            hover:bg-red-500 hover:text-youtube-900
            bg-youtube-500 text-red-500
            rounded-full
            uppercase"
        >
          Download {{ type }}
        </button>
       </div>
    </form>
    <div class="flex flex-col items-center justify-center mt-8" v-if="data">
      <img :src="data.thumbnail.url" alt="" class="h-64 w-64 border rounded-lg">
      <div class="text-2xl mt-4">{{ data.title }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Homes',
  data() {
    return {
      canDownload: false,
      data: '',
      type: 'mp3',
      url: '',
      url_debounce: '',
      error: '',
      debounceTimeout: null,
    };
  },
  watch: {
    url() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.getResults();
      }, 500);
    },
  },
  methods: {
    checkValid() {
      const regexURL = this.url.match(/^(http(s)??:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+$/);
      const regexID = this.url.match(/^([a-zA-Z0-9\-_])+$/);

      return !(!regexURL && !regexID);
    },
    async getResults() {
      this.canDownload = false;
      this.data = '';
      if (this.checkValid()) {
        let id = this.url;
        id = id.replace('https://www.youtube.com/watch?v=', '');
        id = id.replace('https://www.youtube.de/watch?v=', '');
        const response = await fetch(`/info/${id}`);
        const data = await response.json();
        if (data) {
          this.data = data;
          this.canDownload = true;
        }
      }
    },
    async download() {
      this.error = '';
      let id = this.url;
      if (!this.checkValid()) {
        this.error = 'Please enter valid youtube URL / ID';
      } else {
        id = id.replace('https://www.youtube.com/watch?v=', '');
        id = id.replace('https://www.youtube.de/watch?v=', '');
        const response = await fetch(`/info/${id}`);
        const data = await response.json();
        if (!data || data.error) {
          this.error = 'Please enter valid youtube URL / ID';
        } else {
          document.location.href = `/${this.type}/${id}`;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply text-red-500;
  @apply bg-youtube-500;
  @apply px-6;
  @apply py-3;
  @apply rounded-lg;
  @apply ml-2;
  @apply cursor-pointer;

  &.active,
  &:hover {
    @apply text-white;
    @apply bg-red-500;
  }

  &.active {
    @apply cursor-default;
  }
}

button:disabled {
  @apply opacity-25;
  @apply cursor-default;
}
</style>
