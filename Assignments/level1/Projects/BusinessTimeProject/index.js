$(document).ready(function() {
    $('#search-category').change(function() {
        let category = $(this).val();
        let searchQuery = $('#search-query').val();
        if (category === 'All'){
            $('form').attr('action'),
        }
    });
};

