const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop - 80,
        behavior: "smooth",
    });
};

export default scrollToSection;