$(document).ready(function () {
    $.ajax({
        url: 'nb/',
        success: function (response) {
            const paginaNamen = $(response).find("a").map(function () {
                return $(this).attr("href");
            }).get();
            console.log(response);
            console.log(paginaNamen);
            const nieuwstePaginaNamen = paginaNamen.sort((a, b) => {
                return new Date(b) - new Date(a);
            }).slice(0, 3);
            nieuwstePaginaNamen.forEach(function (paginaNaam) {
                $.ajax({
                    url: `nb/${paginaNaam}`,
                    success: function (inhoud) {
                        $("#eerstb").append(inhoud);

                    }
                });
            });
        }
    });
})