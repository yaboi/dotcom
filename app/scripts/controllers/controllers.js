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
    $scope.googleDriveLink = 'https://drive.google.com/file/d/0B_oLYF0iNvi4VmF2cU1TT2hiS2c/view?usp=sharing';
    $scope.experiences = [
        {
            company: 'GiftStarter',
            url: 'giftstarter.com',
            braggingImage: 'images/resume/bragging/500.png',
            braggingUrl: 'http://500.co/startup/giftstarter/?ref=tylergoelz',
            startDate: 'August 2015',
            endDate: 'Present',
            description: 'GiftStarter was the 7th fastest growing startup in Batch14 of 500 Startups and gives users an easy, intuitive way to give gifts together.',
            title: 'Front-End Engineer, Product Developer',
            details: [
                'Rebuilt front-end with a standardized, modern stack delivering higher conversion.',
                'Accompanied GiftStarter through Batch14 of 500 Startups.',
                'Automated social distribution for in-house and partner content.'
            ]
        },
        {
            company: 'WayUp',
            url: 'wayup.com',
            braggingImage: 'images/resume/bragging/ycomb.png',
            braggingUrl: 'https://www.ycombinator.com/?ref=tylergoelz',
            startDate: 'February 2015',
            endDate: 'June 2015',
            description: 'WayUp is the largest online marketplace for college students to find full-time jobs, part-time jobs, and internships. Started in 2014, they have already grown to a user-base of half a million students.',
            title: 'Front-End Developer, Contractor',
            details: [
                'Own creation of public-facing student profile page for half a million students.',
                'Accompany Campus Job through Y Combinator ending in a $7.8m Series A round.',
                'Work directly alongside CTO to enhance and improve an increasingly successful platform.'
            ]
        },
        {
            company: 'WriteOn',
            url: 'writeon.io',
            startDate: 'October 2014',
            endDate: 'Present',
            description: 'WriteOn is a clean, minimal writing tool built for authors by authors. Made with &heart; by Canso.',
            title: 'Front-End Developer, Co-Founder',
            details: [
                'Launched private beta in three months using Lean UX methodology.',
                'User acquisition & engagement, email marketing, social media marketing, ideation on product development, and branding.'
            ]
        },{
            company: 'Organic Beard Supply',
            url: 'organicbeardsupply.com',
            startDate: 'July 2015',
            endDate: 'Present',
            description: 'Organic Beard Supply is on a journey to provide men with sustainable, earth-friendly beard care.',
            title: 'Founder, Product Developer',
            details: [
                'Built Shopify eCommerce platform with recurring payments, optimized user funnels, A/B testing, and tracking - including heat maps, content analytics, and Google Analytics.',
                'Created online & in-person brand awareness throughout local community in less than six months.'
            ]
        }
    ];
    $scope.technologies = [
        'Angular',
        'MVVM',
        'jQuery',
        'javascript',
        'Semantic HTML',
        'Sass/Less'
    ];
    $scope.contactInfo = [
        {
            url: 'mailto:tyler@tylergoelz.com',
            name: 'Email'
        },
        {
            url: 'http://www.tylergoelz.com',
            name: 'Website'
        },
        {
            url: 'https://github.com/yaboi',
            name: 'Github'
        },
        {
            url: 'https://www.angel.co/tylergoelz',
            name: 'Angel'
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
controllers.controller('VorayController', function ($scope) {
    $scope.video = false;
    $scope.toggleVideo = function () {
        $scope.video = !$scope.video;
    };
    $scope.companyName = 'Voray';
});
controllers.controller('UplabsController', function ($scope) {
    $scope.video = false;
    $scope.toggleVideo = function () {
        $scope.video = !$scope.video;
    };
    $scope.companyName = 'Uplabs';
});
controllers.controller('SmoothScrollController', function ($scope, $location, anchorSmoothScroll) {
    $scope.gotoAnchor = function (anchor) {
        var elm = document.getElementById(anchor);
        if(elm !== null) {
            anchorSmoothScroll.scrollTo(elm);
        }
    };
});