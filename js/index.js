document.addEventListener("DOMContentLoaded", (event) => {
    /**
     * Me klikim te buttonit me u shfaq foto e rradhes;
     * 
     * Nese klikohet butoni Left - shfaq foton e dyte; 
     * 
     * Nese klikohet butoni Right - shfaq foton e trete;
     */
    document.getElementById('button-left').addEventListener("click", function(){
        /**
         * per ndryshimin e nje attribute te tag perdorim setAttribute; 
         * https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
         */
        
        /**
         * Data Attributes -> https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
         * 
         * Ketu kemi perdor data-current per me identifiku cila foto eshte 
         * duke u shfaqur per momentin; 
         * 
         * Per left button, kemi bo decrement, -1 per me shfaq previous photo
         * Per right button, kemi bo increment, +1 per me shfaq next photo
         */
        const carouselImg = document.getElementById('carousel-img');
        let target = Number.parseInt(carouselImg.dataset.current) - 1; //1

        /**
         * conditionals -> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
         */
        if(target == 0) { //kushti - nese kushti permbushet, athere kryje veprimin
            target = 3 //veprimi per ndryshim
        }
        carouselImg.setAttribute('src', `img/carousel_${target}.jpg`)
        carouselImg.dataset.current = target

    })
    
    document.getElementById('button-right').addEventListener("click", function(){
        /**
         * per ndryshimin e nje attribute te tag perdorim setAttribute; 
         * https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
         */
        const carouselImg = document.getElementById('carousel-img');
        let target = Number.parseInt(carouselImg.dataset.current) + 1; //1
        if(target > 3) {
            target = 1
        }
        carouselImg.setAttribute('src', `img/carousel_${target}.jpg`)
        carouselImg.dataset.current = target
        
    })

    /**
     * Per detyre; fix carousel me i ndrru fotot vet pas cdo 5 sekunda;
     * per reference, perdorni kodin nga detyra javascript_digital_clock;
     */
});