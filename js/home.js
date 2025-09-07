        const stepsContent = {
            0 : {
                "title" : "Select First Match",
                "src" : 'imgs/step-1.png'
            } , 
            1 : {
                "title" : "Select  Match",
                "src" : 'imgs/step-1.png'
            } , 
            2 : {
                "title" : "Select First ",
                "src" : 'imgs/step-1.png'
            } , 
            3 : {
                "title" : "Select First Match",
                "src" : 'imgs/step-1.png'
            } , 
            4 : {
                "title" : "Select First Match",
                "src" : 'imgs/step-1.png'
            } , 
            5 : {
                "title" : "Select First Match",
                "src" : 'imgs/step-1.png'
            } , 

        }


        steps.forEach((step , i) => {
            step.addEventListener('click' , () => {

                // Change Class
                steps.forEach(step => step.classList.remove('active'));
                step.classList.add('active');


                // Opacity 0
                stepImg.style.opacity = 0;
                
                // Change Content
                stepImg.querySelector('h3').textContent = stepsContent[i].title;
                stepImg.querySelector('img').src = stepsContent[i].src;

                // Opacity 1
                stepImg.style.opacity = 1;
            })

            if (i == 0) {
                step.click();
            }

        })

        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                
                768: {
                    slidesPerView: 2,
                },

                1024: {
                    slidesPerView: 3,
                },
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });


        questions.forEach(question => {
            question.addEventListener('click' , () => {
                question.classList.toggle('active');
                question.querySelector('.end i').classList.toggle('active');
                const answer = question.querySelector('.answer');
                if(question.classList.contains('active')){
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }else{
                    answer.style.maxHeight = 0;
                }
            })
        })
    