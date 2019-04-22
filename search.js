var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var fetch = require("node-fetch");
var favtweet=0;
var maxfavtweet=0;
var retweet=0;
var maxretweet=0;
var params = { 
q: 'vivoipl',
count:''
}	
T.get('search/tweets', params,searchedData);

 function searchedData(err, data, response) {
 	var retweetcount=[];
 	var location=["Andhra","Arunachal","Assam","Chhattisgarh","Goa","Gujarat","Haryana","Himachal","Jammu","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Punjab","Odisha","Rajasthan","Sikkim","Tamil","Telangana","Tripura","Uttar","Uttar","West"];
 	var loctweets=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 	var i;
 	var temp;
 	console.log(data);
 	for(i=0;i<data.search_metadata.count;i++)
{ 		var flag=0;
	if(maxfavtweet<data.statuses[i].favorite_count)
{
	maxfavtweet=data.statuses[i].favorite_count;
	favtweet=data.statuses[i].id;
}		if(maxretweet<data.statuses[i].retweet_count)
{
	maxretweet=data.statuses[i].retweet_count;
	retweet=data.statuses[i].id;
}	 
 // console.log("@");
	 //  console.log(data.statuses[i].user.location);
	 // console.log("@");
	temp=data.statuses[i].user.location;
var res = temp.split(",");
	// console.log(res[0]);
    var url = 'http://localhost:3000/cities?q=' + res[0];
fetch(url)
    .then(res => res.json())
    .then((json) =>
    {
    	json.forEach(function(user){
    			 // console.log("$");
    console.log(user.state);
    for(var j=0;j<29;j++)
 		{	
 			temp=user.state;
 			var n =location[j].search(temp);
 			// console.log(location[j]);
 			// console.log(n);
 			// console.log(temp);
 			if(n>=0)
 			{	flag=1;
 				loctweets[j]+=loctweets[j]+1;
 				// console.log("ef");
 				break;
 			}
 		}	
    	 // console.log("$");
    	
    	})
    } ); 
 		
 		console.log("favorite-tweet"+favtweet);
 		 		console.log("retweet"+retweet);

 	}


}
