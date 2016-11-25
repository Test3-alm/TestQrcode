(function(){


}());

function alertApp( msg ){
    navigator.notification.alert(msg);
}

document.addEventListener('deviceready', function(event) 
            {
            	/*var leanModeButton = document.getElementById('leanModeButton'),
					immersiveModeButton = document.getElementById('immersiveModeButton'),
            		showUnderUiButton = document.getElementById('showUnderUiButton'),
            		showUiButton = document.getElementById('showUiButton');*/
            	
            	function successFunction()
            	{
            	    //console.log("It worked!");
            	}
            	function errorFunction(error)
            	{
            	    //console.log(error);
            	}
				
            	function trace(value)
            	{
            	    //console.log(value);
            	}
            	
            	/*leanModeButton.addEventListener('click', function(event)
            	{
            		AndroidFullScreen.leanMode(successFunction, errorFunction);
            	});
            	
            	immersiveModeButton.addEventListener('click', function(event)
            	{
            		AndroidFullScreen.immersiveMode(successFunction, errorFunction);
            	});
            	
            	showUnderUiButton.addEventListener('click', function(event)
             	{
             		AndroidFullScreen.showUnderSystemUI(successFunction, errorFunction);
             	});
            	
            	showUiButton.addEventListener('click', function(event)
             	{
             		AndroidFullScreen.showSystemUI(successFunction, errorFunction);
             	});*/
				
				//AndroidFullScreen.immersiveMode(successFunction, errorFunction);
            	
            });