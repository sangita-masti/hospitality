function check()
{var x=document.forms["laundbkpg"]["n1"].value;
				if (x=="")
					{
					alert("Enter your Name");
					return false;
					}
                 
                				var na=laundbkpg.n1.value;
				var cnt=laundbkpg.n2.value;
				var adid=laundbkpg.n3.value;
				var adrs=laundbkpg.n4.value;
				var collg=laundbkpg.n5.value;
				var lcd=laundbkpg.n6.value;
				var date=laundbkpg.n7.value;
				var time=laundbkpg.n8.value;
                 
                 				if(na=="" || !isNaN(na) )
				{
				alert("Invalid First Name");
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
				alert("Invalid contact number")
				return false;
				}
				else if(adid=="" || isNaN(adid) )
				{
				alert("Enter  Aadhar ID/Passport no.");
				return false;
				}
				else if(adid.length>12)
				{
				alert("Invalid Aadhar ID");
				return false;
				}
				else if(adid.length<10)
				{
				alert("Incomplete Aadhar/Passport  Number")
				return false;
				}
				else if(adrs=="" || !isNaN(adrs) )
				{
				alert("Enter your Address");
				return false;
				}
				else if(collg=="" || !isNaN(collg) )
				{
				alert("Enter college/university name");
				return false;
				}
				else if(lcd=="" || !is(lcd) )
				{
				alert("Enter Laundry service code");
				return false;
				}
				else if(date=="" || !is(date) )
				{
				alert("Select the  Date");
				return false;
				}
				else if(time=="" || !is(time) )
				{
				alert("Enter the Time");
				return false;
				}

}