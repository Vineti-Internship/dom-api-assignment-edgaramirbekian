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

    // create a button, place ir in button container
    let button = document.createElement('button');
    button.innerHTML = "START";
    button.className = "start_button";

    button_container.appendChild(button);

    

}
