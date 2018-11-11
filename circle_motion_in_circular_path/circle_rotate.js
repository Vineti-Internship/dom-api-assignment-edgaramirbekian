// load script when page is loaded

window.onload = function () {
    let my_page = document.body;

    // create container for circles
    let div_container = document.createElement('div');
    div_container.className = 'container';

    // pot container in <body>
    my_page.appendChild(div_container)

    // create circle path and assign it a class name
    let circle_line = document.createElement('div');
    circle_line.className = 'circle_line';

    // same for running circle + id
    let circle_rotating = document.createElement('div');
    circle_rotating.className = 'rotating_circle';
    circle_rotating.id = 'ball'

    // put it in path div
    circle_line.appendChild(circle_rotating);

    // put the path in container div
    div_container.appendChild(circle_line);

    // create a button container
    let button_container = document.createElement('div');
    button_container.className = 'button_container';
    my_page.appendChild(button_container);

    //create second button container
    let button_container_2 = document.createElement('div');
    button_container_2.className = "button_container_2";
    my_page.appendChild(button_container_2);

    // create a button, place ir in button container
    let button = document.createElement('button');
    button.innerHTML = "START";
    button.className = "start_button";
    button_container.appendChild(button);

    // create an end button
    let end_button = document.createElement('button');
    end_button.innerHTML = "END";
    end_button.className = "end_button";
    button_container_2.appendChild(end_button);

     // run this function when clicking START button
    button.onclick = function () {
        
        // get element which will be used
        const ELEM = document.getElementById("ball");

        // set ball's primary coordinates
        var x0 = 85;
        var y0 = 85;

        // set radius of path
        const RADIUS = 100;

        // set primary angle
        var start_angle = 0;

        //end function when reaching this angle
        var end_angle = Infinity;

        //run function everi 5 ms
        var my_interval = setInterval (move_ball, 5);
        function move_ball () { 

            // when reach end_angle end interval 
            if (start_angle == end_angle) {
                clearInterval (my_insterval);
            }
            else {
                
                // add 1 radian to primary angle every time function is called
                start_angle += 1;

                // add new coordinates according these mathematical calculations
                // multiply start_angle with PI/180 becouse JS Math trigonomeric objects work with Radians rather than degrees
                var x = x0 + RADIUS * Math.cos(start_angle * Math.PI/180);
                var y = y0 - RADIUS * Math.sin(start_angle * Math.PI/180);

                // assign new coordinates to element with id 'ball'
                ELEM.style.left = x +'px';
                ELEM.style.top = y + 'px';

                // add end_button functional to stop movement
                end_button.onclick = function () {
                    end_angle = start_angle;
                };
            }
        }    
    }


}
