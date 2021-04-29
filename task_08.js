function convertTime(num){
var hours=num/60;
var minutes=num-hours;
if(num<60){
hours=0;
minutes=num;
}
return num;
}
