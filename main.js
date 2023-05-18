var px = 50; // Position x and y
var py = 50;
var vx = 0.0; // Velocity x and y
var vy = 0.0;
var updateRate = 1/60; // Sensor refresh rate

function getAccel(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
       // Add a listener to get smartphone orientation 
           // in the alpha-beta-gamma axes (units in degrees)
            window.addEventListener('deviceorientation',(event) => {
                // Expose each orientation angle in a more readable way
                x = event.alpha;
                y = event.beta;
                z = event.gamma;

                var xElement = document.getElementById("x");
                var yElement = document.getElementById("y");
                var zElement = document.getElementById("z");

                xElement.textContent = "X: " + x.toFixed(2);
                yElement.textContent = "Y: " + y.toFixed(2);
                zElement.textContent = "Z: " + z.toFixed(2);
          });
      }
  });
  }
  else{
    document.write("NOOO");
    
  }
}
