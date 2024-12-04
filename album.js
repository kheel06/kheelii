new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/1.jpg",
          img2: "images/4.jpg",
          img3: "images/6.jpg",
          title: "PRETTY",
          isOpen: false,
        },
        {
          img1: "images/5.jpg",
          img2: "images/8.jpg",
          img3: "images/7.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "images/3.jpg",
          img2: "images/9.jpg",
          img3: "images/10.jpg",
          title: "BABIES",
          isOpen: false,
        },
        {
          img1: "images/11.jpg",
          img2: "images/16.jpg",
          img3: "images/12.jpg",
          title: "SLEEP",
          isOpen: false,
        },
        {
          img1: "images/2.jpg",
          img2: "images/14.jpg",
          img3: "images/17.jpg",
          title: "HERO",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
