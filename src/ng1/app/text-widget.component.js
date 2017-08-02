import angular from 'angular';

angular.module('ngApp')
    .component('textWidget', {
        template: `<span ng-if="!$ctrl.hide">{{ $ctrl.text }}</span>`,
        bindings: {
            text: '<',
            hide: '<',
        },
        controller: function () {

        }
    });
