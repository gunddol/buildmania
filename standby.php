<!DOCTYPE html>
<html>
    <head>
        <title>Stand By</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="imagetoolbar" content="no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link
            href="https://fonts.googleapis.com/css2?family=Russo+One&amp;display=swap"
            rel="stylesheet">

        <link rel="stylesheet" type="text/css" href="./css/style.css">
        <link rel="stylesheet" type="text/css" href="./css/jquery.alerts.css">

        <script src="./js/jquery-3.5.1.min.js"></script>
        <script src="./js/owl.carousel.js"></script>
        <script src="./js/slick.js"></script>
        <script src="./js/common.js"></script>
        <script src="./js/jquery.alerts.js"></script>
        <script src="./js/detail.js"></script>
        <script src="./js/alertify.js"></script>
        <script src="./js/konva.min.js"></script>
        <script src="./js/wood.application.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
        <script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
        <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>
    <body>
        <h1>
            가로 :
            <?php echo $_POST['hor']; ?>
            세로 :
            <?php echo $_POST['ver']; ?>
        </h1>
        <br>
        <button
            id="popup-btn"
            href="javascript:void(0);"
            onclick="popup_toggle('cutting')">재단하기</button>

        <div id="cutting" style="display:none;">
            test
        </div>
    </body>

    <script>
        $(function () {
            // $('#drawingCutting #hebeW').text(optObj.gl_hebeW_max);
            // $('#drawingCutting #hebeH').text(optObj.gl_hebeH_max);
            // $('#drawingCutting #plank').attr('data-width', optObj.gl_hebeW_max);
            // $('#drawingCutting #plank').attr('data-width_min', optObj.gl_hebeW_min);
            // $('#drawingCutting #plank').attr('data-height', optObj.gl_hebeH_max);
            // $('#drawingCutting #plank').attr('data-height_min', optObj.gl_hebeH_min);

            $('.guide_popup_wrapper').on('click', function () {
                $(this).fadeOut();
            });
        })
        function popup_toggle(toggleID) {
            obj = document.getElementById(toggleID);
            if (obj.style.display == "none") 
                obj.style.display = "block";
            else 
                obj.style.display = "none";

                // plank_init();
            }
        function init_guide_popup() {
            $('.guide_popup_wrapper').show();
        }
    </script>

</html>