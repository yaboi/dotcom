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
controllers.controller('MainController', function ($scope) {});
controllers.controller('TravelerController', function ($scope) {});
controllers.controller('DeveloperController', function ($scope) {
    $scope.projects = [
        //Add Campus Job
        {
            title: 'WriteOn',
            description: '<a href="http://writeon.io/" target="_blank">WriteOn</a> is a passion project built by Beard & Fedora. The app is a clean, minimalistic writing tool built for authors by authors.',
            image: 'images/developer/projects/writeon/large.gif',
            thumbnail: 'images/developer/projects/writeon/logo.png',
            url: 'http://writeon.io/',
            cta: 'Sign Up For Private Beta'
        },
        {
            title: 'Beard & Fedora',
            description: 'A few years ago, in a detached garage in Downtown St. Pete, a business partnership came to fruition between two best friends. Since then, we\'ve built a <a href="http://www.sproutcamp.co/" target="_blank">startup accelerator for misfits</a>, a LeanUX toolset, a distributed software development team, a <a href="https://github.com/BeardandFedora/HopStack" target="_blank">full front end development stack</a>, <a href="http://writeon.io/" target="_blank">WriteOn</a>, and more. We travel together, write together, and build things to change the world together.',
            image: 'images/developer/projects/beard_and_fedora/large.png',
            thumbnail: 'images/developer/projects/beard_and_fedora/logo.png',
            url: 'http://www.beardandfedora.com/',
            cta: 'Check It Out'
        },
        {
            title: 'A Beard Across America',
            description: '<a href="http://www.abeardacrossamerica.com/" target="_blank">A Beard Across America</a> is a passion project inspired by my trip across America at the end of 2013. The project incorporates everything in my wheelhouse, including product development, scalability, and customer validation.',
            image: 'images/developer/projects/abaa/large.png',
            thumbnail: 'images/developer/projects/abaa/logo.png',
            url: 'http://www.beardandfedora.com/',
            cta: 'Get Your Copy Today'
        }
    ];
});
controllers.controller('ResumeController', function ($scope, $sce) {
    $scope.experiences = [
        {
            company: 'Campus Job',
            url: 'www.campusjob.com',
            startDate: 'February 2015',
            endDate: 'Present',
            description: 'Campus Job is the largest online marketplace for college students to find part-time jobs and internships. Started in 2014, they have already grown to a user-base of 77,000+ students.',
            title: 'Front-End Developer, Full-Time Contractor',
            details: [
                'Early stage Front-End Developer working directly alongside CTO to enhance a increasingly successful platform.',
                'Champion a public-facing student profile page for 77,000+ students, complete with inline editing capabilities.'
            ]
        },
        {
            company: 'WriteOn.io',
            url: 'www.writeon.io',
            startDate: 'October 2014',
            endDate: 'Present',
            description: 'WriteOn is a clean, minimalistic writing tool built for authors by authors, A passion project built by Beard & Fedora (see below.)',
            title: 'Front-End Developer, Co-Founder',
            details: [
                'Launched private beta in three months using Lean UX methodology.',
                'Responsible for marketing site, email marketing, ideation on product development, and branding.',
                'Maintain a from-scratch brand identity to symbolize an open, clean piece of loose-leaf paper.'
            ]
        },
        {
            company: 'Beard & Fedora',
            url: 'www.beardandfedora.com',
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
        'AngularJS',
        'HTML5',
        'Sass',
        'jQuery',
        'Django',
        'Github',
        'Grunt',
        'Bower',
        'Yeoman',
        'WordPress',
        'Adobe CC'
    ];
    $scope.contactInfo = [
        {
            url: 'mailto:tyler@tylergoelz.com',
            name: 'Email Me'
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
        }
    ];
})
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