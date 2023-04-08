let prompt=require('prompt-sync')();
var figlet = require('figlet');
var chalk = require('chalk');
const clear = require('cli-clear');
// const prompt=require("prompt-sync")();
clear();
const width = process.stdout.columns;
const text="welcome to attendance management system let's get started";
console.log(chalk.blue(figlet.textSync('Attendance Management', { horizontalLayout: 'full' })));
// chalk 
console.log(chalk.green(text.padStart((width + text.length) / 2).padEnd(width)));


let admin=[
    {
        name:"admin",
        password:"admin"
    }
];
let standard=[
    {
        standard:"1",
        section:["A","B"]
    },
    {
        standard:"2",
        section:["A","B"]
    },
    {
        standard:"3",
        section:["A","B"]
    },
    {
        standard:"4",
        section:["A","B"]
    },
]
let list=[
    {
    name:'john',
    age:16,
    address:'kathmandu',
    phone:984567890,
    email:'john@gmail.com',
    standard:3,
    section:'A',
    roll:45,
    password:131004
    },
    {
    name:'ram',
    age:16,
    address:'delhi',
    phone:974567890,
    email:'ram@gmail.com',
    standard:3,
    section:'A',
    roll:47
    },
    {
    name:'shyam',
    age:16,
    address:'jaipur',
    phone:904567890,
    email:'shyam@gmail.com',
    standard:3,
    section:'B',
    roll:45
    },
    {
    name:'hari',
    age:16,
    address:'kathmandu',
    phone:984567890,
    email:'hari@gmail.com',
    standard:3,
    section:'B',
    roll:45,
    }
];

let staff=[
    {
    name:'kathir',
    dob:31/12/1990,
    address:'kathmandu',
    phone:984567890,
    email:'kathir@gmail.com',
    salary:50000,
    subject:'math',
    password:'kathir123'
    },
    {
    name:'kumar',
    dob:31/12/1990,
    address:'kathmandu',
    phone:874567890,
    email:'kumar@gmail.com',
    salary:50000,
    subject:'science',
    password:'kumar123',
    },
    {
    name:'kiran',
    dob:31/12/1990,
    address:'kathmandu',
    phone:891567890,
    email:'kiran@gmail.com',
    salary:50000,
    subject:'english',
    password:'kiran123',
    },
    {
        name:'vijay',
        dob:03/02/1982,
        address:'bengaluru',
        phone:9087654321,
        email:'vijay@gmail.com',
        salary:50000,
        subject:'tamil',
        password:'vijay123',
    }
];



let complaint=[
    {
        name:'john',
        description: "A section 2 fans are not working properly",
        status: "pending",
    }
]
let leave=[
    {
    name:'john',
    standard:'A',
    date:'2022-11-01',
    reason:'sick',
    status:'pending'
    }
]

let attendance_list=[
    {
    name:'john',
    date:'13',
    status:'present'
    },
    {
    name:'john',
    date:'10',
    status:'present'
    }
]











///end the user data's


///                                     -------------------admin Works ------------------

function addstandard(){
    let s=prompt("Enter standard: ");
    let flag=0;
    for(let i=0;i<standard.length;i++){
        if(standard[i].standard==s){
            flag=1;
            break;
        }
    }
    if(flag==0){
        standard.push({
            standard:s,
            section:['A']
        });
        console.log("Standard added successfully");
    }
    else{
        console.log("Standard already exists");
    }
}
function addsection(){
    let s=prompt("Enter standard: ");
    let sec=prompt("Enter section: ");
    let flag=0;
    for(let i=0;i<standard.length;i++){
        if(standard[i].standard==s){
            flag=1;
            break;
        }
    }
    if(flag==1){
        for(let i=0;i<standard.length;i++){
            if(standard[i].standard==s){
                let flag=0;
                for(let j=0;j<standard[i].section.length;j++){
                    if(standard[i].section[j]==sec){
                        flag=1;
                        break;
                    }
                }
                if(flag==0){
                    standard[i].section.push(sec);
                    console.log("Section added successfully");
                }
                else{
                    console.log("Section already exists");
                }
            }
        }
    }
}
function addstaff(){
    let name=prompt("Enter name: ");
    let dob=prompt("Enter dob: ");
    let address=prompt("Enter address: ");
    let phone=prompt("Enter phone: ");
    let email=prompt("Enter email: ");
    let salary=prompt("Enter salary: ");
    let subject=prompt("Enter subject: ");
    let password=prompt("Enter password: ");
    staff.push({
        name:name,
        dob:dob,
        address:address,
        phone:phone,
        email:email,
        salary:salary,
        subject:subject,
        password:password
    });
    console.log("Staff added successfully");
}

function managecomplaints(){
    let n;
    do{
    console.log("1. view complaint");
    console.log("2. approve complaint");
    console.log("3. reject complaint");
    console.log("4. exit");
    n=prompt('Select the option: ');
    switch(n){
        case '1':
            for(let i=0;i<complaint.length;i++){
                console.log("Name: "+complaint[i].name);
                console.log("Description: "+complaint[i].description);
                console.log("Status: "+complaint[i].status);
            }
            break;
        case '2':
            let n1=prompt("Enter name: ");
            for(let i=0;i<complaint.length;i++){
                if(complaint[i].name==n1){
                    complaint[i].status="approved";
                }
            }
            console.log("Complaint approved successfully");
            break;
        case '3':
            let n2=prompt("Enter name: ");
            for(let i=0;i<complaint.length;i++){
                if(complaint[i].name==n2){
                    complaint[i].status="rejected";
                }
            }
            console.log("Complaint rejected successfully");
            break;
        }
    }
    while(n!='4');
}
function leave_reports_admin(){
    let n;
    do{
    console.log("1. Enter the Standard");
    console.log("2. Enter the Date");
    console.log("3. Exit");
    n=prompt("Select the option: ");
    switch(n){
        case '1':
            let s=prompt("Enter standard: ");
            for(let i=0;i<leave.length;i++){
                if(leave[i].standard==s){
                    console.log("Name: "+leave[i].name);
                    console.log("Standard: "+leave[i].standard);
                    console.log("Date: "+leave[i].date);
                    console.log("Reason: "+leave[i].reason);
                    console.log("Status: "+leave[i].status);
                }
            }
            break;
        case '2':
            let d=prompt("Enter date: ");
            for(let i=0;i<leave.length;i++){
                if(leave[i].date==d){
                    console.log("Name: "+leave[i].name);
                    console.log("Standard: "+leave[i].standard);
                    console.log("Date: "+leave[i].date);
                    console.log("Reason: "+leave[i].reason);
                    console.log("Status: "+leave[i].status);
                }
            }
            break;
    }
}
    while(n!='3');
}  

function manage_reports_admin(){
    let n;
    do{
        console.log("1. All Staff list");
        console.log("2. Staff list by standard");
        console.log("3. Staff list by subject");
        console.log("4. View staff details");
        console.log("5. Edit Staff details");
        console.log("6. Exit");
        n=prompt("Select the Option: ");
        switch(n){
            case '1':
                for(let i=0;i<staff.length;i++){
                    console.log("Name: "+staff[i].name);
                    console.log("Dob: "+staff[i].dob);
                    console.log("Address: "+staff[i].address);
                    console.log("Phone: "+staff[i].phone);
                    console.log("Email: "+staff[i].email);
                    console.log("Salary: "+staff[i].salary);
                    console.log("standard: "+staff[i].standard);
                    console.log("Section:" + staff[i].section);
                    console.log("Subject: "+staff[i].subject);
                }
                break;
            case '2':
                let s=prompt("Enter standard: ");
                for(let i=0;i<staff.length;i++){
                    if(staff[i].standard==s){
                        console.log("Name: "+staff[i].name);
                        console.log("Dob: "+staff[i].dob);
                        console.log("Address: "+staff[i].address);
                        console.log("Phone: "+staff[i].phone);
                        console.log("Email: "+staff[i].email);
                        console.log("Salary: "+staff[i].salary);
                        console.log("standard: "+staff[i].standard);
                        console.log("Section:" + staff[i].section);
                        console.log("Subject: "+staff[i].subject);
                    }
                }
                break;
            case '3':
                let sub=prompt("Enter subject: ");
                for(let i=0;i<staff.length;i++){
                    if(staff[i].subject==sub){
                        console.log("Name: "+staff[i].name);
                        console.log("standard: "+staff[i].standard);
                        console.log("Section:" + staff[i].section);
                        console.log("Subject: "+staff[i].subject);
                    }
                }
                break;
            case '4':
                let staff_name1=prompt("Enter staff name: ");
                for(let i=0;i<staff.length;i++){
                    if(staff[i].name==staff_name1){
                        console.log("Name: "+staff[i].name);
                        console.log("Dob: "+staff[i].dob);
                        console.log("Address: "+staff[i].address);
                        console.log("Phone: "+staff[i].phone);
                        console.log("Email: "+staff[i].email);
                        console.log("Salary: "+staff[i].salary);
                        console.log("standard: "+staff[i].standard);
                        console.log("Section:" + staff[i].section);
                        console.log("Subject: "+staff[i].subject);
                    }
                }
                break;
            case '5':
                let staff_name2=prompt("Enter staff name: ");
                for(let i=0;i<staff.length;i++){
                    if(staff[i].name==staff_name2){
                      let n;
                      do{
                        console.log("1. Edit Address");
                        console.log("2. Edit Phone");
                        console.log("3. Edit Email");
                        console.log("4. Edit Salary");
                        console.log("5. Edit Handled Standard");
                        console.log("6. Edit Handled Section");
                        console.log("7. Exit");
                        n=prompt("Select the option: ");
                        switch(n){
                            case '1':
                                let address=prompt("Enter address: ");
                                staff[i].address=address;
                                console.log("Address updated successfully");
                                break;
                            case '2':
                                let phone=prompt("Enter phone: ");
                                staff[i].phone=phone;
                                console.log("Phone updated successfully");
                                break;
                            case '3':
                                let email=prompt("Enter email: ");
                                staff[i].email=email;
                                console.log("Email updated successfully");
                                break;
                            case '4':
                                let salary=prompt("Enter salary: ");
                                staff[i].salary=salary;
                                console.log("Salary updated successfully");
                                break;
                            case '5':
                                let standard=prompt("Enter standard: ");
                                staff[i].standard=standard;
                                console.log("Standard updated successfully");
                                break;
                      }
                    }while(n!='6');
                    }
                }
                console.log("Staff details updated successfully");

        }

    }
    while(n!=7);
}


function admin_module(){
      clear();
const width = process.stdout.columns;
const text="welcome to Admin Page"; 
console.log(chalk.green(text.padStart((width + text.length) / 2).padEnd(width)));
    let admin_name=prompt("Enter admin name: ");
    let admin_password=prompt("Enter admin password: ");
    let flag=0;
    for(let i=0;i<admin.length;i++){
        if(admin[i].name==admin_name && admin[i].password==admin_password){
            flag=1;
            break;
        }
    }
    if(flag==1){
        let n;
        do{
            console.log("1.Add Standard");
            console.log("2.Add Section");
            console.log("3.Add Staff");
            console.log("4.Manage Complaints");
            console.log("5.Leave Reports");
            console.log("6.Manage Reports");
            console.log("7.Exit");
            n=prompt("Select the option: ");
            switch(n){
                case '1':
                    addstandard();
                    break;
                case '2':
                    addsection();
                    break;
                case '3':
                    addstaff();
                    break;
                case '4':
                    managecomplaints();
                    break;
                case '5':
                    leave_reports_admin();
                    break;
                case '6':
                    manage_reports_admin();
                    break;
}
}
while(n!='7');
}
else{
    console.log("Invalid admin name or password");
}
}


//                                     -------------------Admin Module END-------------------

//                                    -------------------STAFF Module START-------------------


function addstudent(){
    let name="name",dob='age',address='address',email='email',phone='phone',standard='standard',section='section',id='roll';
let n1=prompt("Enter name : ");
let d1=prompt("Enter age: ");
let a1=prompt("Enter address: ");
let e1=prompt("Enter email: ");
let ph1=prompt("Enter phone: ");
let s1=prompt("Enter standard: ");
let sec1=prompt("Enter section: ");
let id1=prompt("Enter id: ");
list[name]=n1;
list[pass]=p1;
list[dob]=d1;
list[address]=a1;
list[email]=e1;
list[phone]=ph1;
list[standard]=s1;
list[section]=sec1;
list[id]=id1;
console.log("Student details added successfully");

}

function attendance(){
    console.log("1. Fill attendance");
    console.log("2. View attendance");  
    let n=prompt('Select the option: ');
    for(let i=0;i<list.length;i++){
        for(let j=i+1;j<list.length;j++){
            if(list[i].name>list[j].name){
                temp=list[i];
                list[i]=list[j];
                list[j]=temp;
            }
        }
 }
    switch(n){
        case '1':
            let d=prompt("Enter date: ");
            for(let i=0;i<list.length;i++){
                console.log("Name: "+list[i].name);
                attendance_list.push({
                    name:list[i].name,
                    date:d,
                    status:prompt("Enter status: ")
                })
            }
            console.log("Attendance filled successfully");
            break;
        case '2':
            let d1=prompt("Enter date: ");
            for(let i=0;i<attendance_list.length;i++){
                if(attendance_list[i].date==d1){
                    console.table(attendance_list.filter((item)=>item.date==d1));
                }
            }
            break;
        default:
            console.log("Invalid option");
}
}

function managelevae(){
    let n;
    do{    
    console.log("1. view leave");
        console.log("2. approve leave");
        console.log("3. reject leave");
        console.log("4. exit");
        n=prompt('Select the option: ');
        switch(n){
            case '1':
                for(let i=0;i<leave.length;i++){
                    console.log("Name: "+leave[i].name);
                    console.log("Date: "+leave[i].date);
                    console.log("Reason: "+leave[i].reason);
                    console.log("Status: "+leave[i].status);
                }
                break;
            case '2':
                let n1=prompt("Enter name: ");
                for(let i=0;i<leave.length;i++){
                    if(leave[i].name==n1){
                        leave[i].status="approved";
                    }
                }
                console.log("Leave approved successfully");
                break;
            case '3':
                let n2=prompt("Enter name: ");
                for(let i=0;i<leave.length;i++){
                    if(leave[i].name==n2){
                        leave[i].status="rejected";
                    }
                }
                console.log("Leave rejected successfully");
                break;
            }
        }
        while(n!='4');
}

function managereports(){
    console.log("1. View Leave reports");
    console.log("2. View Complains");
    console.log("3. View Attendance");
    let n=prompt('Select the option: ');
    switch(n){
        case '1':
            for(let i=0;i<leave.length;i++){
                console.log("Name: "+leave[i].name);
                console.log("Date: "+leave[i].date);
                console.log("Reason: "+leave[i].reason);
                console.log("Status: "+leave[i].status);
            }
            break;
        case '2':
            for(let i=0;i<complaint.length;i++){
                console.log("Name: "+complaint[i].name);
                console.log("Description: "+complaint[i].description);
                console.log("Status: "+complaint[i].status);
            }
            break;
        case '3':
            for(let i=0;i<attendance_list.length;i++){
                console.log("Name: "+attendance_list[i].name);
                console.log("Date: "+attendance_list[i].date);
                console.log("Status: "+attendance_list[i].status);
            }
            break;
        default:
            console.log("Invalid option");
    }
}

function change_password(){
    let n=prompt("Enter name: ");
    let p=prompt("Enter password: ");
    for(let i=0;i<staff.length;i++){
        if(staff[i].name==n){
            staff[i].password=p;
        }
    }
    console.log("Password changed successfully");
}


function staff_Module(){
let staff_name=prompt('enter the staff name:');
let staff_password=prompt('enter the staff password:');
let flag=0;
for(let i=0;i<staff.length;i++){
    if(staff_name==staff[i].name && staff_password==staff[i].password){
        flag=1;
        console.log('welcome to the staff portal');
        break;
    }
}
if(flag==1){
    let n;
       do{
        console.log("1. Add student details");
        console.log("2. Fill attendance");
        console.log("3. Manage leave");
        console.log("4. manage complaints");
        console.log("5. manage reports");
        console.log("6. change password");
        console.log("7. Exit");
        n=prompt('Select the option: ');
        switch(n){
            case '1':   
                addstudent();
                break;
            case '2':
                attendance();
                break;
            case '3'://manage leave
            managelevae();
                break;

            case '4'://manage complaints
            managecomplaints();
                break;

            case '5'://manage reports
                managereports();
                break;

            case '6'://change password
         change_password();
            console.log("Password changed successfully");
            break;
            
    }//switch case end
}//do loop end
    while(n!=7);
}
else{
    console.log('invalid staff name or password');
}
}

//                                --------------------Staff module End--------------------
//                                  -----------------student module-----------------

//manage account
function  viewdob(x){
    let y=x;
    for(let i=0;i<list.length;i++){
        if(list[i].name==y){
            console.log(list[i].age);
        }
    }
}
function  viewaddress(x){
    let y=x;
    for(let i=0;i<list.length;i++){
        if(list[i].name==y){
            console.log(list[i].address);
        }
    }
}
function  viewphone(x){
    let y=x;
    for(let i=0;i<list.length;i++){
        if(list[i].name==y){
            console.log(list[i].phone);
        }
    }
}
function  viewemail(x){
    let y=x;
    for(let i=0;i<list.length;i++){
        if(list[i].name==y){
            console.log(list[i].email);
        }
    }
}
function  viewall(x){
    let y=x;
    for(let i=0;i<list.length;i++){
        if(list[i].name==y){
            console.log( list[i]);
        }
    }
    // console.log(all-details);
}

function manageaccount(x){
    let y=x;
    let choice;
    do{
    console.log("1. view date of birth");
    console.log("2. view address");
    console.log("3. view phone number");
    console.log("4. view email");
    console.log("5. view all details");
    console.log("6. exit");
    choice=prompt("enter your choice: ");
    switch(choice){
        case '1':
            viewdob(y);
            break;
        case '2':
            viewaddress(y);
            break;
        case '3':
            viewphone(y);
            break;
        case '4':
            viewemail(y);
            break;
        case '5':
            viewall(y);
            break;
    }
}
    while(choice!='6');
}

//end of manage account
//start of complaint
function makecomplain(x){
    let y=x;
    complaint.push({
        name:y,
        description:prompt("enter your complaint: "),
        status:"pending"
    });
    console.log("your complaint is submitted");
}
//end of complaint
//apply for leave
function applyforleave(x){
    let y=x;
    leave.push({
        name:y,
        date:prompt("enter the date: "),
        reason:prompt("enter the reason: "),
        status:"pending"
    });
    console.log("your leave is submitted");
}
//end of apply for leave
//start of view attendance
function viewattendance(x){
    let y=x;

}
function change_password_student(){
    let n=prompt("Enter name: ");
    let p=prompt("Enter password: ");
    for(let i=0;i<list.length;i++){
        if(list[i].name==n){
            list[i].password=p;
        }
    }
    console.log("Password changed successfully");
}


function student_Module(){
    let student_name=prompt('enter the Student name:');
    let student_password=prompt('enter the Student password:');
    let flag=0;
    for(let i=0;i<list.length;i++){
        if(student_name==list[i].name && student_password==list[i].password){
            flag=1;
            console.log('welcome to the student portal');
            break;
        }
    }
    if(flag==1){
    do{
    console.log("1. Manage Account");
    console.log("2. Make Complain");
    console.log("3. Apply for Leave");
    console.log("4. Attendance Reports");
    console.log("5. Change password");
    console.log("6. Exit");
    n=prompt("Enter your choice: ");
    switch(n){
        case '1':
            manageaccount(user_name);
            break;
        case '2':
            makecomplain();
            break;
        case '3':
            applyforleave();
            break;
        case '4':
            attendancereports();
            break;
        case '5':
            change_password_student();
            break;
    
    }
    }
    while(n!='5');
    
        }
    else
    console.log("Invalid username or password");
    }
    

///                                      -----------------student module end-----------------



//                                      ------- attendance function start here ---------

let n;
    console.log("1. Admin Page");
    console.log("2. Staff Page");
    console.log("3. Student Page");
    console.log("4. Exit");
    n=prompt("Enter your choice: ");
    switch(n){
        case '1':
            admin_module();
            break;
        case '2':
            staff_Module();
            break;
        case '3':
            student_Module();
            break;
        case '4':
            console.log("Thank you for using our system");
            break;
        default:
            console.log("Invalid choice");

    }







