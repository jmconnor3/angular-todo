/* eslint-disable */
angular.module('app')
.component('child',{
    bindings: {
        txt: '<',
    },
    controller: function(connor){
        console.log(connor, 'in child')
     const { check } = connor;
     check(this);
        this.removeChild =() => {
            this.txt.pop();
        }
    },

    template:`<div ng-click='$ctrl.removeChild()'>
    <pre>{{$ctrl.txt}}</pre>
    </div>`

})
