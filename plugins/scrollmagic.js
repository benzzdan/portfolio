// import Vue from 'vue'
// import ScrollMagic from 'scrollmagic'


// Vue.use(ScrollMagic)
// Vue.use(Indicators)


var controller = new ScrollMagic.Controller();


//Added TimeOut otherwise I get DOM error by nuxt
setTimeout(function() {
    var pinItemScene = new ScrollMagic.Scene({
            triggerElement: '#intro',
            triggerHook: 0,
        })
        .setPin('#intro')
        .addTo(controller);




    $('.titles').each(function() {
        var titlesItemScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7
            }).setClassToggle(this, 'show-in')
            // .addIndicators({
            //     name: 'TITLES',
            //     colorStart: 'yellow',
            //     colorEnd: 'blue'
            // })
            .addTo(controller);
    })



    //skills animation

    $('.skill-item').each(function() {
        var skillItemScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8
            })
            .setClassToggle(this, 'fade-in')
            // .addIndicators({
            //     name: 'skill item scene',
            //     colorTrigger: 'black',
            //     colorStart: '#75C695',
            //     colorEnd: 'pink'
            // }) // this requires a plugin
            .addTo(controller);
    })


    //Work title animation

    var WorkTitleScene = new ScrollMagic.Scene({
            triggerElement: '.work-title',
            triggerHook: 0.5,

        }).setClassToggle('.work-title', 'show-in')
        // .addIndicators({
        //     name: 'WORK TITLE',
        //     colorTrigger: 'purple',
        //     colorStart: 'black',
        //     colorEnd: 'green'
        // }) // this requires a plugin
        .addTo(controller);

    //skill animation right section

    $('.skill-item-right').each(function() {
        var skillItemScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9
            })
            .setClassToggle(this, 'fade-in2')
            // .addIndicators({
            //     name: '',
            //     colorTrigger: 'black',
            //     colorStart: '#75C695',
            //     colorEnd: 'pink'
            // }) // this requires a plugin
            .addTo(controller);
    })

    //Progress bars animnations

    $('progress').each(function() {
        var el = this;

        var skillItemScene = new ScrollMagic.Scene({
                triggerElement: '.skill-list',
                triggerHook: 0.9
            })
            .setClassToggle(this, 'fade-in')
            // .addIndicators({
            //     name: 'progress bars scene',
            //     colorTrigger: 'orange',
            //     colorStart: '#75C695',
            //     colorEnd: 'red'
            // }) // this requires a plugin
            .on('start', function() {
                $(el).closest('progress').attr('value', 0);
            })
            .on('progress', function() {
                let val = $(el).closest('progress').attr('data-progress');
                $(el).closest('progress').attr('value', val);
            })
            .addTo(controller);
    })

    //progress bar second section animation

    $('progress.progress-right').each(function() {
        var el = this;

        var progressItemScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8
            })
            .setClassToggle(this, 'fade-in2')
            // .addIndicators({
            //     name: 'skill item scene',
            //     colorTrigger: 'black',
            //     colorStart: '#75C695',
            //     colorEnd: 'pink'
            // }) // this requires a plugin
            .on('start', function() {
                $(el).closest('progress').attr('value', 0);
            })
            .on('progress', function() {
                let val = $(el).closest('progress').attr('data-progress');
                $(el).closest('progress').attr('value', val);
            })
            .addTo(controller);
    })


    //AboutME

    var aboutSceneTl = new TimelineMax();


    aboutSceneTl
        .to('#aboutimg', 0.5, { autoAlpha: 1, x: -314, opacity: 1, ease: Power1.easeInOut }, "-=0.8")
        .to('#aboutme-p', 0.5, { autoAlpha: 1, x: 150, opacity: 1, ease: Power1.easeInOut }, "-=0.8")
        // .fromTo('#aboutme-p', 0.2, { x: 0, opacity: 0.2, ease: Power1.easeInOut }, { x: 150, opacity: 1, ease: Power1.easeInOut })

    var aboutMeScene = new ScrollMagic.Scene({
            triggerElement: '#aboutme',
            triggerHook: 0.7,
            duration: '60%'
        })
        .setTween(aboutSceneTl)
        // .addIndicators({
        //     name: 'about me',
        //     colorStart: '#75C670',
        //     colorEnd: 'pink'
        // })
        .addTo(controller);


    //WORK

    var animLineTl = new TimelineMax();

    animLineTl
        .to('#animline', 0.5, { autoAlpha: 1, ease: Power1.easeInOut, height: 190 }, "-=0.5")


    var animLineScene = new ScrollMagic.Scene({
            triggerElement: '#work',
            triggerHook: 0.5,
            duration: '40%'
        })
        // .addIndicators({
        //     name: 'ANIM-LINE',
        //     colorTrigger: 'orange',
        //     colorStart: '#75C695',
        //     colorEnd: 'red'
        // })
        .setTween(animLineTl)
        .addTo(controller);

    //second line

    var animLineTl2 = new TimelineMax();

    animLineTl2
        .to('#animline2', 0.5, { autoAlpha: 1, ease: Power1.easeInOut, height: 190 }, "-=0.5")


    var animLine2Scene = new ScrollMagic.Scene({
            triggerElement: '#work-title',
            triggerHook: 0.5,
            duration: '70%'
        })
        .setTween(animLineTl2)
        .addTo(controller);

    //portfolio section


    $('.portfolio-section').each(function() {

        var portfolioScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.6,

            })
            // .addIndicators({
            //     name: 'portfolio',
            //     colorTrigger: 'orange',
            //     colorStart: '#75C695',
            //     colorEnd: 'red'
            // })
            .setClassToggle(this, 'fade-in')
            // .setClassToggle('#portfolio-section', 'fade-in')
            .addTo(controller)
    })




    controller.scrollTo(function(newpos) {
        TweenMax.to(window, 1, { scrollTo: { y: newpos }, ease: Power1.easeInOut });
    });






}, 1000)


//work scene

// var skillItemScene = new ScrollMagic.Scene({
//     triggerElement: '#work',
//     triggerHook: 0.8
// }).addTo(controller);