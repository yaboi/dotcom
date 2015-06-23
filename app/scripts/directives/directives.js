'use strict';
/**
 * @ngdoc function
 * @name dotcom/controller
 * @description directives for dotcom
 */
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
    }
});