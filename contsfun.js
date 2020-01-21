function check()
{var x=document.forms["contactpg"]["n1"].value;
				if (x=="")
					{
					alert("Enter your Name");
					return false;
					}
                 
                				var fna=contactpg.n1.value;
				var ema=contactpg.n2.value;
				var cnt=contactpg.n3.value;
				var mess=contactpg.n4.value;
                 
                 				if(fna=="" || !isNaN(fna) )
				{
				alert("Invalid First Name");
				return false;
				}
				else if(ema=="" || !isNaN(ema) )
				{
				alert("Invalid Email ID");
				return false;
				}
				else if(cnt=="" || isNaN(cnt) )
				{
				alert("Enter ContactNo");
				return false;
				}
				else if(cnt.length>10)
				{
				alert("Enter 10 digits only");
				return false;
				}
				else if(cnt.length<10)
				{
				alert("Incomplete Contact number")
				return false;
				}
				else if(mess=="" || !isNaN(mess) )
				{
				alert("Enter an appropriate message");
				return false;
				}

}