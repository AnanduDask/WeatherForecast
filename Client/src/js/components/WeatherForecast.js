var React=require('react');

var WeatherForecast=React.createClass({

     render:function(){
     return(<div className="container-fluid" id="content-wrap">
     <table className="table table-bordered table-inverse " >


     <tr>
     <th>TEMPERATURE :</th><br/>
     <td>{this.props.temp}</td>
     </tr>
     <br/>

     <tr>
     <th>TEMPERATURE MIN :</th><br/>
     <td>{this.props.temp_min}</td>
     </tr>
     <br/>

     <tr>
     <th>TEMPERATURE MAX :</th><br/>
     <td>{this.props.temp_max}</td>
     </tr>
     <br/>

     <tr>
     <th>PRESSURE :</th><br/>
     <td>{this.props.pressure}</td>
     </tr>  
     <br/>

     <tr>
     <th>HUMIDITY :</th><br/>
     <td>{this.props.humidity}</td>
     </tr>
     <br/>

     <tr>
     <th>DESCRIPTION :</th><br/>
     <td>{this.props.description}</td>
     </tr>
     <br/>

     <tr>
     <th>CLOUDS :</th><br/>
     <td>{this.props.clouds}</td>
     </tr>
     <br/>

     <tr>
     <th>WIND SPEED :</th><br/>
     <td>{this.props.windspeed}</td>
     </tr>
     <br/>

     <tr>
     <th>Day :</th><br/>
     <td>{this.props.datehr}</td>
     </tr>
     <tr></tr>

     </table>
     
   </div> 
   )
 }
});
     module.exports=WeatherForecast;