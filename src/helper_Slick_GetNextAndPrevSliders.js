// const sliderRef = useRef();
// const prevSlideRef = useRef();
// const nextSlideRef = useRef();

// const afterChange = () => {
//   return;
//   if (prevSlideRef.current !== null) {
//     setTimeout(() => {
//       prevSlideRef.current.classList.remove("slick-item--fade-out");
//       prevSlideRef.current.style.opacity = 0;
//       prevSlideRef.current = null;

//       nextSlideRef.current.style.opacity = 1;
//       nextSlideRef.current = null;
//     });
//   }
// };

// const beforeChange = (prev, next) => {
//   if (prev !== next) {
//     prevSlideRef.current = sliderRef.current.innerSlider.list.querySelector(
//       `[data-index="${prev}"]`
//     );
//     nextSlideRef.current = sliderRef.current.innerSlider.list.querySelector(
//       `[data-index="${next}"]`
//     );

//     setTimeout(() => {
//       // prevSlideRef.current.classList.add("slick-item--fade-out");
//       // nextSlideRef.current.style.opacity = 0;
//       // nextSlideRef.current.classList.add("slick-item--fade-in");
//     });
//   }
// };

// const settingsForFade = {
//   beforeChange,
//   afterChange,
// };

//<Slider ref={handleRef} {...settingsForFade}>
//  {sliderItems}
//</Slider>;
