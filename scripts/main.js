//function to initialize objects
function initialize(){
	
	var myEmployee1=new Employee("myEmployee1",10,20000);
	document.writeln("myEmployee1 Details:<br>-------------------------<br>");
	myEmployee1.printdetails();
	document.writeln("-------------------------<br>");
	var myEmployee2=new Employee("myEmployee2",12,20000);
	document.writeln("myEmployee1 Details:<br>-------------------------<br>");
	myEmployee2.printdetails();
	document.writeln("-------------------------<br>");
	
	
}

function Employee(name, workedHr, salary) {
    this.name = name;   
    this.workedHr = workedHr;
    this.salary = salary;
	
	if( this.salary>= 15000 && this.workedHr>10){
	   this.bonus=0.1*this.salary;
	}else{
	   this.bonus=0.05*this.salary;
    }
	
	this.printdetails=function (){
		console.log(this)
		for(var item in this){
			if(item!="printdetails"){
				
			
				document.writeln("<b>"+item+"</b>::"+this[item]+"<br>")
			}
			
		}
	}
}

initialize();

