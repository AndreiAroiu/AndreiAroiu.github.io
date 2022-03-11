AOS.init({
    disable: () => {
        let maxWidth = 992;
        return window.innerWidth < maxWidth;
    }
});
