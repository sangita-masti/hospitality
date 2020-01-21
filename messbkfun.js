function check()
{var x=document.forms["messbkpg"]["n1"].value;
				if (x=="")
					{
					alert("Enter your Name");
					return false;
					}
                 
                				var na=messbkpg.n1.value;
				var ema=messbkpg.n3.value;
				var cnt=messbkpg.n4.value;
				var aid=messbkpg.n5.value;
				var mess=messbkpg.n6.value;
				var rcd=messbkpg.n6.value;
                 
                 				if(na=="" || !isNaN(na) )
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
				alert("Invalid contact number")
				return false;
				}
				else if(aid=="" || !isNaN(aid) )
				{
				alert("Invalid Aadhar ID");
				return false;
				}
				else if(mess=="" || !isNaN(mess) )
				{
				alert("Enter an appropriate message");
				return false;
				}
				else if(rcd=="" || !isNaN(rcd) )
				{
				alert("Enter  Caterer  Code");
				return false;
				}

}