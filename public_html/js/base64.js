$(function(){
    $.ajax({
        url: "setQuiz.php",
        type: 'POST',
        success: function() {
            // 成功時の処理
        },
        error(jqXHR, textStatus, errorThrown) {
            // 失敗時の処理
        },
        data: data,
        dataType: 'json'
    })
});