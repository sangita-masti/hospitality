function check()
{var x=document.forms["feedbkpg"]["n1"].value;
				if (x=="")
					{
					alert("Enter the Name");
					return false;
					}
                 
                				var fna=feedbkpg.n1.value;
				var ema=feedbkpg.n2.value;
				var cnt=feedbkpg.n3.value;
				var subj=feedbkpg.n4.value;
				var mess=feedbkpg.n5.value;
                 
                 				if(fna=="" || !isNaN(fna) )
				{
				alert("Invalid First Name");
				return false;
				}
				else if(ema==""||!isNaN(ema))
				{
				alert("Invalid Email ID");
				return false;
				}
				else if(cnt=="" || isNaN(cnt) )
				{
				alert("Invalid ContactNo");
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
				else if(subj=="" || !isNaN(subj) )
				{
				alert("Enter  Subject");
				return false;
				}
				else if(mess=="" || !isNaN(mess) )
				{
				alert("Enter your Feedback");
				return false;
				}

}