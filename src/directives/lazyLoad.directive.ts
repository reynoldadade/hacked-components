import { Directive, createApp } from "vue";

const lazyLoad: Directive = {
  mounted: (el: HTMLElement) => {
    function loadImage() {
      //find element that has the node name of IMG
      const imageElement: HTMLImageElement | undefined = Array.from(
        el.children
      ).find((el) => el.nodeName === "IMG") as HTMLImageElement | undefined;
      // if an img element exists as a child of this component
      if (imageElement) {
        // add an event listener of load to it
        imageElement.addEventListener("load", () => {
          // when loaded is called you have to wait 100ms and add loaded class which make the img element not hidden anymore to the element itself
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        // listen for error too and pass a console message of error for the imagElement
        imageElement.addEventListener("error", () => console.log("error"));
        // once the element had been fully loaded then we can pass the dataset url data to the src attribute
        imageElement.src = imageElement.dataset.url!;
      }
    }

    function handleIntersect(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options: IntersectionObserverInit = {
        root: null,
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  },
};

export default lazyLoad;
