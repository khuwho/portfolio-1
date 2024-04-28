<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/split-type"></script>
<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"></script>
<script>
    
    gasp.registerPlugin(ScrollTrigger)

    const SplitTypes = document.querySelectorAll('.coolinteraction')
    splitTypes.forEach(char,i)=> {

        const text= new SplitTypes(char, { types: 'chars'})
        
        gsap.from(text.chars,{

            ScrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,

            },
            opacity: 0.2,
            stagger:0.1
        })
         
    }    
    
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
