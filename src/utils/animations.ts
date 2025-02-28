
export const observeElements = (
  elementsRef: React.MutableRefObject<HTMLElement[]>,
  threshold = 0.1
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold }
  );

  const elements = elementsRef.current;
  elements.forEach((item) => {
    if (item) observer.observe(item);
  });

  return () => {
    elements.forEach((item) => {
      if (item) observer.unobserve(item);
    });
  };
};

// Add a class to make animations work on scroll
export const setupScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
};
