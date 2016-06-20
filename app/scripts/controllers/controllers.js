'use strict';
/**
 * @ngdoc function
 * @name passionDrivenPortfolio.controller:HeaderCtrl
 * @description Controller of the passionDrivenPortfolio
 */
var controllers = angular.module('ui.controllers', [

]);
controllers.controller('PassionDrivenController', function ($scope, $location, anchorSmoothScroll) {
    $scope.brand = 'Tyler Goelz';
    $scope.linkPrefix = '';
    $scope.pageLinks = {
        'base': '/main',
        'traveler': '/traveler',
        'developer': '/developer'
    };
    $scope.$on('$locationChangeStart', function () {
        switch($location.path()) {
        case $scope.pageLinks.traveler:
            $scope.navigationBackgroundColor = 'navbar-traveler';
            $scope.jumbotronBackgroundColor = 'bg-traveler';
            $scope.currentPage = 'traveler';
            break;
        case $scope.pageLinks.developer:
            $scope.navigationBackgroundColor = 'navbar-developer';
            $scope.jumbotronBackgroundColor = 'bg-developer';
            $scope.currentPage = 'developer';
            break;
        default:
            $scope.navigationBackgroundColor = 'navbar-default';
            $scope.jumbotronBackgroundColor = '';
            $scope.currentPage = 'main';
            break;
        }
        var elm = document.getElementById('body');
        if(elm !== null) {
            anchorSmoothScroll.scrollTo(elm);
        }
    });
});
controllers.controller('HeaderController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.isCollapsed = true;
});
controllers.controller('MainController', function () {});
controllers.controller('TravelerController', function () {});
controllers.controller('DeveloperController', function ($scope) {
    $scope.skills = [{
        svg: 'images/icons/svg/flask.svg',
        image: '/images/icons/png/flask.png',
        title: 'Cutting Edge Technology',
        description: 'Whether it\'s stable, cutting edge technology in client work or experimental, bleeding edge technology in personal projects, I\'m constantly reading about, learning, contrinbuting to, and implementing the most modern technologies.',
        extra: ''
    },{
        svg: 'images/icons/svg/infinity-loop.svg',
        image: '/images/icons/png/infinity-loop.png',
        title: 'Lean UX & Product Development',
        description: 'A Front-End Developers job of aligning interface and business needs is never done.',
        extra: ''
    },{
        svg: 'images/icons/svg/spaceship.svg',
        image: '/images/icons/png/spaceship.png',
        title: 'Scalability, From Code-To-Product',
        description: 'From modern scaffolding tools to intuitive interface design, I build products and apps that scale to the needs of the user, as well as future developers.',
        extra: ''
    },{
        svg: 'images/icons/svg/retina-ready.svg',
        image: '/images/icons/png/retina-ready.png',
        title: 'Customer Validation',
        description: 'From startups to corporations, knowing your customer is the first step to any successful app or product. Once you\'ve validated your customer, you can build a successful web app, website, or product.',
        extra: ''
    }];

    $scope.projects = [{
        url: 'https://www.giftstarter.com?ref=tylergoelz',
        image: 'images/developer/projects/giftstarter/large.png',
        thumbnail:'images/developer/projects/giftstarter/logo.png',
        title: 'GiftStarter',
        description: 'While working with GiftStarter, I helped rebuild the app experience with a standardized, higher converting front-end stack. We graduated from 500 Startups as the 7th fastest growing company of the batch.',
        cta: {
            url: 'https://www.giftstarter.com?ref=tylergoelz',
            text: 'Give Something Thoughtful'
        }
    }, {
        url: 'https://www.wayup.com?ref=tylergoelz',
        image: 'images/developer/projects/wayup/large.png',
        thumbnail:'images/developer/projects/wayup/logo.png',
        title: 'WayUp',
        description: 'WayUp contracted me to create a public-facing student profile page for 77k+ college students - now used by half a million college students. I accompanied WayUp through Y Combinator where they graduated with a $7.8M Series A round.',
        cta: {
            url: 'https://www.wayup.com?ref=tylergoelz',
            text: 'Get Hired Today'
        }
    }, {
        url: 'https://www.organicbeardsupply.com',
        image: 'images/developer/projects/obs/large.png',
        thumbnail:'images/developer/projects/obs/logo.png',
        title: 'Organic Beard Supply',
        description: 'I built Organic Beard Supply from an idea to a staple business found at local markets and online. It\'s grown to be a completely functioning business with products, customers, and community support.',
        cta: {
            url: 'https://www.organicbeardsupply.com?ref=tylergoelz',
            text: 'Shop Organic Beard Care'
        }
    }, {
        url: 'http://writeon.io?ref=tylergoelz',
        image: 'images/developer/projects/writeon/large.gif',
        thumbnail:'images/developer/projects/writeon/logo.png',
        title: 'WriteOn',
        description: 'WriteOn originated as a passion project and quickly became a product with traction and users. WriteOn is a clean, refined, minimal writing experience stripped of distraction.',
        cta: {
            url: 'http://writeon.io?ref=tylergoelz',
            text: 'Start Writing Now'
        }
    }, {
        url: 'http://variant.ninja?ref=tylergoelz',
        image: 'images/developer/projects/variant_ninja/large.png',
        thumbnail:'images/developer/projects/variant_ninja/logo.png',
        title: 'Variant Ninja',
        description: 'Variant Ninja was created out of necessity. After pin-pointing redundant workflow while building high conversion landing pages, Variant Ninja was built to iterate quickly while adding conversion tracking, lead nurturing, and more.',
        cta: {
            url: 'http://variant.ninja?ref=tylergoelz',
            text: 'Build Converting Landing Pages'
        }
    }];
    $scope.pastProjects = [{
       image: 'images/developer/projects/sproutcamp/logo.png',
       title: 'SproutCamp',
       cta: {
           url: 'http://www.sproutcamp.co?ref=tylergoelz',
           text: 'Learn More'
       }
    }, {
        image: 'images/developer/projects/hashtag_creative/logo.png',
        title: 'Hashtag Creative',
        cta: {
            url: 'http://hashtagcreative.co?ref=tylergoelz',
            text: 'Learn More'
        }
    }, {
        image: 'images/developer/projects/lifetime/logo.png',
        title: 'Life Time Fitness',
        cta: {
            url: 'https://www.lifetimefitness.com?ref=tylergoelz',
            text: 'Learn More'
        }
    }, {
        image: 'images/developer/projects/redwood/logo.png',
        title: 'Redwood Agile',
        cta: {
            url: 'https://angel.co/redwood-agile?ref=tylergoelz',
            text: 'Learn More'
        }
    }, {
        image: 'images/developer/projects/leanlabs/logo.png',
        title: 'Lean Labs',
        cta: {
            url: 'https://www.lean-labs.com/work/appsfreedom?ref=tylergoelz',
            text: 'Learn More'
        }
    }, {
        image: 'images/developer/projects/activprayer/logo.png',
        title: 'ActivPrayer',
        cta: {
            url: 'http://www.activprayer.com?ref=tylergoelz',
            text: 'Learn More'
        }
    }, {
        image: 'images/developer/projects/gffb/logo.png',
        title: 'Fit For Birth',
        cta: {
            url: 'http://getfitforbirth.com/?ref=tylergoelz',
            text: 'Learn More'
        }
    }];
});
controllers.controller('ResumeController', function ($scope) {
    $scope.experiences = [
        {
            company: 'Campus Job',
            url: 'http://www.campusjob.com',
            startDate: 'February 2015',
            endDate: 'June 2015',
            description: 'Campus Job is the largest online marketplace for college students to find part-time jobs and internships. Started in 2014, they have already grown to a user-base of 77,000+ students.',
            title: 'Front-End Developer, Contractor',
            details: [
                'Own creation of a public-facing student profile page for 77,000+ students.',
                'Accompany Campus Job through Y Combinator ending in a $9m raise.',
                'Work directly alongside CTO to enhance and improve an increasingly successful platform.'
            ]
        },
        {
            company: 'WriteOn.io',
            url: 'http://writeon.io',
            startDate: 'October 2014',
            endDate: 'Present',
            description: 'WriteOn is a clean, minimalistic writing tool built for authors by authors, A passion project built by Beard & Fedora (see below.)',
            title: 'Front-End Developer, Co-Founder',
            details: [
                'Launched private beta in three months using Lean UX methodology.',
                'Responsible for user acquisition & engagement, email marketing, social media marketing, ideation on product development, and branding.'
            ]
        },
        {
            company: 'Beard & Fedora',
            url: 'http://www.beardandfedora.com',
            startDate: 'January 2012',
            endDate: 'Present',
            description: 'Two guys that love to build things, write things, and experience life.',
            title: 'Front-End Developer, Co-Builder, Co-Writer, Co-Experiencer',
            details: [
                'SproutCamp - A mentor-driven accelerator program that provides entrepreneurs the chance to turn their ideas into a validated business. (Beard & Fedora)',
                'A Beard Across America - A passion project inspired by a trip across America. (Beard)',
                'HopStack - A beautifully crafted application stack for software teams. (Beard & Fedora)'
            ]
        },
        {
            company: 'Lifestyle Family Fitness',
            url: '',
            startDate: 'June 2008',
            endDate: 'October 2012',
            description: 'With 50+ clubs, Lifestyle Family Fitness was one of the largest fitness organizations in the Southeast.',
            title: 'Lead Front-End & UX Developer',
            details: [
                'Introduced UX principles and best practices while overseeing front-end team.',
                'Championed a Personal Training Scheduler: An Outlook style Personal Training appointment scheduler with ability to create events, check-in appointments and sell agreements.',
                'Increased membership sales by overseeing development of online, a la carte membership creation system.'
            ]
        }
    ];
    $scope.technologies = [
        'Angular',
        'jQuery/javascript',
        'HTML5',
        'Sass/CSS3',
        'Github',
        'Grunt/Gulp',
        'Bower',
        'Django',
        'Codio',
        'Adobe '
    ];
    $scope.contactInfo = [
        {
            url: 'mailto:tyler@tylergoelz.com',
            name: 'Email Me'
        },
        {
            url: 'http://www.tylergoelz.com',
            name: 'Portfolio'
        },
        {
            url: 'https://github.com/yaboi',
            name: 'Github'
        },
        {
            url: 'http://www.twitter.com/tylergoelz',
            name: 'Twitter'
        },
        {
            url: 'http://www.facebook.com/ILikeTylerGoelz',
            name: 'Facebook'
        },
        {
            url: 'http://www.medium.com/@tylergoelz',
            name: 'Blog'
        },
        {
            url: 'https://www.linkedin.com/in/tylergoelz',
            name: 'LinkedIn'
        },
        {
            url: '',
            name: '727-342-0319'
        }
    ];
});
controllers.controller('LivitController', function ($scope) {
    $scope.video = false;
    $scope.toggleVideo = function () {
        $scope.video = !$scope.video;
    };
    $scope.companyName = 'Liv.it';
});
controllers.controller('SmoothScrollController', function ($scope, $location, anchorSmoothScroll) {
    $scope.gotoAnchor = function (anchor) {
        var elm = document.getElementById(anchor);
        if(elm !== null) {
            anchorSmoothScroll.scrollTo(elm);
        }
    };
});