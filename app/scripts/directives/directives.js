'use strict';
/**
 * @ngdoc function
 * @name dotcom/controller
 * @description directives for dotcom
 */
/*jshint multistr: true */
var directives = angular.module('ui.directives', [

]);
directives.directive('videoPlayer', function () {
    return {
        restrict: 'AE',
        replace: true,
        template: function (elem, attr) {
            var template = '';
            template += '<div class="video-thumb">';
            template += '   <img ng-click="toggleVideo();" src="' + attr.videoPlacholder + '" alt="' + attr.videoPlaceholderAlt + '" class="center-block img-responsive" />';
            template += '   <div ng-if="video" class="video-container" ng-click="toggleVideo();">\
                                <div class="container">\
                                    <div class="row">\
                                        <div class="col-xs-12 col-lg-10 col-lg-offset-1">\
                                            <div class="video-content">';
            template += '                       <button type="button" class="btn close" ng-click="toggleVideo();">\
                                                    <span class="fui-cross"></span> Close Video\
                                                </button>';
            template += '                       <iframe src="' + attr.videoSrc + '" width="100%" frameborder="0" autoplay="true" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            template += '                   </div>\
                                        </div>\
                                    </div>\
                                </div>';
            template += '   </div>';
            template += '</div>';
            return template;
        }
    };
});
directives.directive('resumeCta', function () {
    return {
        restrict: 'AE',
        replace: true,
        template: function (elem, attr) {
            var template = '';
            template += '   <div class="col-xs-12 col-md-8 col-md-offset-2 text-center">';
            template += '       <div class="well">';
            template += '            <p>' + attr.headline + '</p>';
            template += '            <a href="' + attr.link + '" class="btn btn-wide btn-primary" target="_blank">' + attr.btnText + '</a>';
            template += '        </div>';
            template += '    </div>';
            return template;
        }
    };
});
directives.directive('project', function () {
    return {
        restrict: 'AE',
        template: function (elem, attr) {
            var template = '';
            template += '<div class="hero">';
            template += '    <div class="container">';
            template += '        <div class="row">';
            template += '            <div class="col-md-7 content">';
            template += '                <a ng-href="' + attr.url + '" class="thumbnail">';
            template += '                    <img src="' + attr.thumbnailSrc + '" alt="">';
            template += '                </a>';
            template += '                <h3>' + attr.title + '</h3>';
            template += '                <p>' + attr.desc + '</p>';
            template += '                <a ng-href="' + attr.url + '" class="btn" role="button">' + attr.cta + '</a>';
            template += '            </div>';
            template += '            <div class="col-md-5 image">';
            template += '                <img src="' + attr.imageSrc + '" alt="">';
            template += '            </div>';
            template += '        </div>';
            template += '    </div>';
            template += '</div>';
            return template;
        }
    };
});
