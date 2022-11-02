// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathMyDog");
function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(noName="*"){
    return function(adj1="special") {
return `You are ${noName}${adj1}${noName}!`;
    }
    
}