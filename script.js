$(".boxs").mouseenter(function(e) {
    const id = e.target.id;
   
    /* I wrote this code based on https://letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms */
    const box = document.getElementById(id);
    const THRESHOLD = 10;

    function handleHover(e) { 
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        
        box.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    function handleReset(e) {
        box.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    box.addEventListener("mousemove", handleHover);
    box.addEventListener("mouseleave", handleReset);

});