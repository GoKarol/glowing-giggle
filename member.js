function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'moduless/skills/views;member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'SkillsMemberController',
        bindToController: true,
        scope: {
            member: '='
        }
    };  
    // code goes here
}
