/* eslint-disable */
angular.module('app',[])
.component('todoList', {
    controller: function(connor){
        const { check } = connor;
        check(this);
        this.textBox = ['do laundry', 'feed cat', 'watch cats clint eastwood inpersonation'];
        this.addTodos = () => {
        this.textBox.push(this.text);
        this.text = '';
        }
        this.removeTodos = (index) => {
            console.log(index);
               this.textBox.splice(index, 1);
        }
    },
    template: `<h1>Todo List</h1>
    <input ng-model='$ctrl.text'>
    <button ng-click="$ctrl.addTodos()">add</button>
    <ul>
    <li ng-repeat='text in $ctrl.textBox'
        ng-click='$ctrl.removeTodos($index)'
    
    >{{text}}</li>
    </ul>
    <hr/>
   <child txt=$ctrl.textBox></child>`

})

/*
 *use module to create app. 
 use npm to download angular
 make sure that html has access to angular and its code
 take base html and create template in component
 add todos to list via input box
  click and clear out todos 
*/
