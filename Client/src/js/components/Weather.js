var React=require('react');
var WeatherChild=require('./WeatherChild');
var fun=false;
var Weather=React.createClass({
 getInitialState :function()
 {
   return({dataArray:[]});
 },
 getDataWithLocation:function()
{
 console.log("enter point");
 $.ajax({
   url:'http://api.openweathermap.org/data/2.5/forecast?q='+this.refs.cityBar.value+'&appid=d845791fab334518eb94c9006971a262',
   dataType:'json',
   async:false,
   type:'GET',
   success:function(data)
   {
     fun=true;
     console.log("DataWithLocation1");
     console.log(data);
     this.setState({dataArray:data});

   }.bind(this),
   error: function(xhr, status, err) {
         console.log("hello bob");
      console.error(err.toString());
    }.bind(this),

 });

},
   render:function()
 {
   var done;
   if(fun)
   {
     done=<WeatherChild data1={this.state.dataArray} />
   }
   console.log("data1");
   console.log(this.state.dataArray);
   return(

           <div className="form-group" id="search">
              
              <input type="text" className="form-control"  ref="cityBar" placeholder="Search" />
              
              <button id="btnSearch" type="submit" onClick={this.getDataWithLocation} className="btn btn-default">SEARCH</button>
              {done}
              
           </div>)

 }
})
module.exports=Weather
