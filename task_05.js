function areaTriangle(num1,num2,num3){
    const first=prompt("Enter number for first side");
    const second=prompt("Enter number for second side");
    const third=prompt("Enter number for third side");
     const semi=(first+second+third)/2;
    const area=Math.sqrt(
        semi*((semi-first)*(semi-second)*(semi-third)));
        console.log(area);
    }