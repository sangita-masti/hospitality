function check()
{var x=document.forms["roombkpg"]["n1"].value;
				if (x=="")
					{
					alert("Enter your Name");
					return false;
					}
                 
                				var na=roombkpg.n1.value;
				var ema=roombkpg.n3.value;
				var cnt=roombkpg.n4.value;
				var aid=roombkpg.n5.value;
				var collg=roombkpg.n7.value;
				var rcd=roombkpg.n8.value;
                 
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
				else if(aid=="" || isNaN(aid) )
				{
				alert("Enter AadharNo");
				return false;
				}
				else if(aid.length>12)
				{
				alert("Enter proper AadharID number");
				return false;
				}
				else if(aid.length<12)
				{
				alert("Incomplete AadharID number")
				return false;
				}
				else if(collg=="" || !isNaN(collg) )
				{
				alert("Enter an appropriate College name");
				return false;
				}
				else if(rcd=="" || !isNaN(rcd) )
				{
				alert("Enter Room Code");
				return false;
				}

}