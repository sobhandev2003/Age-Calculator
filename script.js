let width = screen.width;
let height = screen.height;
document.body.style.width = width;
document.body.style.height = height;
// **************************************Select HTML Element************************
let bir_day=document.getElementById('bir_day');
let bir_month=document.getElementById('bir_month');
let bir_year=document.getElementById('bir_year');
let birth_day=document.getElementById('input_day');
let birth_month=document.getElementById('input_month');
let birth_year=document.getElementById('input_year');
let birth_unit=document.getElementsByClassName('unit');
let input_box=document.getElementsByClassName('input');
let error=document.getElementsByClassName('err');
let age_year=document.getElementById('age_year');
let age_month=document.getElementById('age_month');
let age_day=document.getElementById('age_day');


function submit() {
    // *****************store input value in a variable and type cast**************
    let day_value=birth_day.value;
    let month_value=birth_month.value;
    let year_value=birth_year.value;
    day_value=Number(day_value);
    month_value=Number(month_value);
    year_value=Number(year_value);
    const present_time=new Date();
    let present_year=present_time.getFullYear(); 
    let present_month=present_time.getMonth()+1; 
    let present_day=present_time.getDate(); 
    let given_time=new Date(`${year_value}-${month_value}-${day_value}`);
    // ******************condition check and Error checking********************************
    if(getvalue()){
    let message="This is filled required";
        show_error(message,message,message);   
    }
    else{
        error_carection();
        if((day_value<1||day_value>31)||(month_value<1||month_value>12)||(given_time.getTime()>present_time.getTime())){
            show_error("must be valid day","must be valid month","must be in the past");
        }
        else{
            error_carection();
     if(endofMonth(year_value,month_value,day_value)){

//*******************Calculate AGE *****************************************/
        let D_age=present_day-day_value;
        while(D_age<0){
            
            present_day=present_day+end_date(present_year,present_month-1);
            present_month=present_month-1;
            D_age=present_day-day_value;
        }
        let M_age=present_month-month_value;
        while (M_age<0){
            present_year=present_year-1;
            present_month=present_month+12;
            M_age=present_month-month_value;
        }
        let Y_age=present_year-year_value;

        age_day.innerHTML=`${D_age} `;
        age_month.innerHTML=`${M_age} `;
        age_year.innerHTML=`${Y_age} `;
        



     }


    }
   
}
}
function  getvalue(){
    const day_len=birth_day.value.length;
    const year_len=birth_year.value.length;
    const month_len=birth_month.value.length;

    if(day_len==0||year_len==0||month_len==0){
        return true;
    }
    else{
        return false;
    }


}
function show_error(day_err,month_err,year_err){
        error[0]. innerHTML = day_err;
        error[1]. innerHTML = month_err;
        error[2]. innerHTML = year_err;
        birth_unit[0].style.color="hsl(0, 100%, 67%)";
        birth_unit[1].style.color="hsl(0, 100%, 67%)";
        birth_unit[2].style.color="hsl(0, 100%, 67%)";
        input_box[0].style.border="1px solid hsl(0, 100%, 67%)";
        input_box[1].style.border="1px solid hsl(0, 100%, 67%)";
        input_box[2].style.border="1px solid hsl(0, 100%, 67%)";
}
function error_carection(){
        error[0]. innerHTML = "";
        error[2]. innerHTML = "";
        error[1]. innerHTML = "";
        birth_unit[0].style.color=" hsl(0, 1%, 44%)";
        birth_unit[1].style.color=" hsl(0, 1%, 44%)";
        birth_unit[2].style.color=" hsl(0, 1%, 44%)";
        input_box[0].style.border="1px solid  hsl(0, 1%, 44%)";
        input_box[1].style.border="1px solid  hsl(0, 1%, 44%)";
        input_box[2].style.border="1px solid  hsl(0, 1%, 44%)";
}
function endofMonth(year,month,given_date) {
   let last_date=end_date(year,month);
console.log(last_date);
    if(last_date>=given_date){
        return true;
    }
    else{
        error[0]. innerHTML = "Must be valid date";
        birth_unit[0].style.color="hsl(0, 100%, 67%)";
        birth_unit[1].style.color="hsl(0, 100%, 67%)";
        birth_unit[2].style.color="hsl(0, 100%, 67%)";
        input_box[0].style.border="1px solid hsl(0, 100%, 67%)";
        input_box[1].style.border="1px solid hsl(0, 100%, 67%)";
        input_box[2].style.border="1px solid hsl(0, 100%, 67%)";
        
    }
}
function end_date(year,month){
    let last_date=new Date(year,month,0);
    last_date=new Date(last_date);
    return last_date.getDate();

}

