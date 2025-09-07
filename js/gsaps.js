        document.addEventListener("DOMContentLoaded", function() {
            gsap.registerPlugin(ScrollTrigger);

            // --- Mouse Effect (Desktop Only) ---
            const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

            if (isDesktop) {
                const cursor = document.createElement('div');
                cursor.className = 'cursor-follower';
                document.body.appendChild(cursor);
                gsap.set(cursor, { xPercent: -50, yPercent: -50 });
                window.addEventListener('mousemove', e => {
                    gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY });
                });
                document.querySelectorAll('a, button, .card, .question, .swiper-button-next, .swiper-button-prev').forEach(el => {
                    el.addEventListener('mouseenter', () => { gsap.to(cursor, 0.3, { scale: 2.5, backgroundColor: 'white' }); });
                    el.addEventListener('mouseleave', () => { gsap.to(cursor, 0.3, { scale: 1, backgroundColor: 'var(--pink)' }); });
                });
            }

            // --- Hero Section Animation ---
            gsap.from(".hero .text > *", {
                duration: 1,
                opacity: 0,
                y: 50,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Hero Icons Parallax
            gsap.to(".hero .first", { scrollTrigger: { scrub: 1 }, y: -150, x: 50 });
            gsap.to(".hero .second", { scrollTrigger: { scrub: 1 }, y: -100, x: -50 });
            gsap.to(".hero .third", { scrollTrigger: { scrub: 1 }, y: -120, x: 100 });
            gsap.to(".hero .four", { scrollTrigger: { scrub: 1 }, y: -80, x: -80 });
            gsap.to(".hero .five", { scrollTrigger: { scrub: 1 }, y: -180, x: 20 });

            // --- Scroll Triggered Animations ---
            gsap.from(".benifits .img", { scrollTrigger: { trigger: ".benifits", start: "top 80%" }, duration: 1.2, x: -100, opacity: 0, ease: "power3.out" });
            gsap.from(".benifits .text > *", { scrollTrigger: { trigger: ".benifits", start: "top 80%" }, duration: 1, x: 100, opacity: 0, stagger: 0.2, ease: "power3.out" });
            gsap.from(".benifits .cards .card", { scrollTrigger: { trigger: ".benifits .cards", start: "top 80%" }, duration: 0.8, opacity: 0, y: 50, stagger: 0.2, ease: "power2.out" });

            gsap.from(".how .text > *", { scrollTrigger: { trigger: ".how", start: "top 80%" }, duration: 1, opacity: 0, y: 50, stagger: 0.2, ease: "power3.out" });

            // Animate the whole .steps section for stability
            gsap.from(".steps", { scrollTrigger: { trigger: ".steps", start: "top 80%" }, duration: 1, opacity: 0, y: 50, ease: "power3.out" });

            gsap.from(".sports .text > *", { scrollTrigger: { trigger: ".sports", start: "top 80%" }, duration: 1, opacity: 0, y: 50, stagger: 0.2, ease: "power3.out" });

            gsap.from(".faq .text > *", { scrollTrigger: { trigger: ".faq", start: "top 80%" }, duration: 1, opacity: 0, y: 50, stagger: 0.2, ease: "power3.out" });

            gsap.utils.toArray(".questions .container").forEach(container => {
                gsap.from(container, { scrollTrigger: { trigger: container, start: "top 85%" }, duration: 0.8, opacity: 0, y: -20, ease: "power3.out" });
            });

            gsap.from(".affilate .img", { scrollTrigger: { trigger: ".affilate", start: "top 80%" }, duration: 1.2, y: -50, opacity: 0, ease: "power3.out" });
            gsap.from(".affilate .text > *:not(.btn)", { scrollTrigger: { trigger: ".affilate", start: "top 80%" }, duration: 1, x: 100, opacity: 0, stagger: 0.3, ease: "power3.out" });
        });
                    el.addEventListener('mouseenter', () => { gsap.to(cursor, 0.3, { scale: 2.5, backgroundColor: 'white' }); });
                    el.addEventListener('mouseleave', () => { gsap.to(cursor, 0.3, { scale: 1, backgroundColor: 'var(--pink)' }); });
                });
            }

            // --- Hero Section Animation ---
            gsap.from(".hero .text > *", {
                duration: 1,
                opacity: 0,
                y: 50,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Hero Icons Parallax
            gsap.to(".hero .first", { scrollTrigger: { scrub: 1 }, y: -150, x: 50 });
            gsap.to(".hero .second", { scrollTrigger: { scrub: 1 }, y: -100, x: -50 });
            gsap.to(".hero .third", { scrollTrigger: { scrub: 1 }, y: -120, x: 100 });
            gsap.to(".hero .four", { scrollTrigger: { scrub: 1 }, y: -80, x: -80 });
            gsap.to(".hero .five", { scrollTrigger: { scrub: 1 }, y: -180, x: 20 });

            // --- Scroll Triggered Animations ---
            gsap.from(".benifits .img", { scrollTrigger: { trigger: ".benifits", start: "top 80%" }, duration: 1.2, x: -100, opacity: 0, ease: "power3.out" });
            gsap.from(".benifits .text > *", { scrollTrigger: { trigger: ".benifits", start: "top 80%" }, duration: 1, x: 100, opacity: 0, stagger: 0.2, ease: "power3.out" });
            gsap.from(".benifits .cards .card", { scrollTrigger: { trigger: ".benifits .cards", start: "top 80%" }, duration: 0.8, opacity: 0, y: 50, stagger: 0.2, ease: "power2.out" });

            gsap.from(".how .text > *", { scrollTrigger: { trigger: ".how", start: "top 80%" }, duration: 1, opacity: 0, y: 50, stagger: 0.2, ease: "power3.out" });

            // Animate the whole .steps section for stability
            gsap.from(".steps", { scrollTrigger: { trigger: ".steps", start: "top 80%" }, duration: 1, opacity: 0, y: 50, ease: "power3.out" });

            gsap.from(".sports .text > *", { scrollTrigger: { trigger: ".sports", start: "top 80%" }, duration: 1, opacity: 0, y: 50, stagger: 0.2, ease: "power3.out" });

            gsap.from(".faq .text > *", { scrollTrigger: { trigger: ".faq", start: "top 80%" }, duration: 1, opacity: 0, y: 50, stagger: 0.2, ease: "power3.out" });

            gsap.utils.toArray(".questions .container").forEach(container => {
                gsap.from(container, { scrollTrigger: { trigger: container, start: "top 85%" }, duration: 0.8, opacity: 0, y: -20, ease: "power3.out" });
            });

            gsap.from(".affilate .img", { scrollTrigger: { trigger: ".affilate", start: "top 80%" }, duration: 1.2, y: -50, opacity: 0, ease: "power3.out" });
            gsap.from(".affilate .text > *:not(.btn)", { scrollTrigger: { trigger: ".affilate", start: "top 80%" }, duration: 1, x: 100, opacity: 0, stagger: 0.3, ease: "power3.out" });
        });