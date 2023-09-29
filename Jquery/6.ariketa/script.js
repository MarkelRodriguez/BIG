const cohete = $("#cohete"); 
        let posX = 0;
        let posY = 0;

        function moveRocket() {
            cohete.css("left", posX + "px");
            cohete.css("top", posY + "px");
        }

        $(document).keydown(function(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "a":
                posX -= 100;
                cohete.css("transform", "rotate(-90deg)");
                cohete.animate({ left: posX + "px" }, 1000);
                break;
            case "ArrowRight":
            case "d":
                posX += 100;
                cohete.css("transform", "rotate(90deg)");
                cohete.animate({ left: posX + "px" }, 1000);
                break;
            case "ArrowUp":
            case "w":
                posY -= 100;
                cohete.css("transform", "rotate(0deg)");
                cohete.animate({ top: posY + "px" }, 1000);
                break;
            case "ArrowDown":
            case "s":
                posY += 100;
                cohete.css("transform", "rotate(180deg)");/* Girar hacia abajo */
                cohete.animate({ top: posY + "px" }, 1000);/* Moverlo 100 pixeles hacia abajo(Y)*/
                break;
        }
        });

        moveRocket();