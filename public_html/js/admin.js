//jsから取り除く
$(function(){ 
    var quiz_stock = '';
    //admin.htmlからクイズデータをsetQuiz.phpにPOSTする。
    function post_quiz(){
        
    }

    function read_quiz(){
        $.ajax({
            type: "GET",
            url: '/API/getQuiz.php',
            dataType: 'json',
            scriptCharset: 'UTF-8',
        }).done(function(response_quiz_data){
            for(var i = 0; i < response_quiz_data.length; i++){
                quiz_stock +=
                '<tr>' +
                '<td>' + response_quiz_data[i].id          + '</td>' +
                '<td>' + response_quiz_data[i].question_no + '</td>' +
                '<td>' + response_quiz_data[i].question    + '</td>' +
                '<td>' +
                '<ul>' +
                '<li> 1.'+response_quiz_data[i].choice1    + '</li>' +
                '<li> 2.'+response_quiz_data[i].choice2    + '</li>' +
                '<li> 3.'+response_quiz_data[i].choice3    + '</li>' +
                '<li> 4.'+response_quiz_data[i].choice4    + '</li>' +
                '<li> 5.'+response_quiz_data[i].choice5    + '</li>' +
                '<li> 6.'+response_quiz_data[i].choice6    + '</li>' +
                '<li> 7.'+response_quiz_data[i].choice7    + '</li>' +
                '<li> 8.'+response_quiz_data[i].choice8    + '</li>' +
                '<li> 9.'+response_quiz_data[i].choice9    + '</li>' +
                '<li> 10.'+response_quiz_data[i].choice10    + '</li>' +
                '</ul>' +
                '</td>' +
                '<td>' +response_quiz_data[i].answer_choice_no+ '</td>' +
                '<td>' +
                '<button id=edit'+response_quiz_data[i].id+' data-number='+response_quiz_data[i].id+' class="btn btn-primary d-block mb-1 edit">編集</button>' + 
                '<button id=delete'+response_quiz_data[i].id+' data-number='+response_quiz_data[i].id+' class="btn btn-primary d-block delete">削除</button>' +
                '</td>' +
                '</tr>';
            }
            //console.log(quiz_stock);
            $("#quiz_tbody").html(quiz_stock);

            
            //編集ボタンが押された時
            $(".edit").on('click',function(){        
                alert("ちょっと待っててね");
                $("#entry2").trigger('click');
                //テキストボックスにクイズデータを自動的に表示
                console.log(response_quiz_data[0].question_no);
                document.forms.enter.question_no.value=response_quiz_data[0].question_no;
                document.forms.enter.question.value   =response_quiz_data[0].question;
                document.forms.enter.choice1.value    =response_quiz_data[0].choice1;
                document.forms.enter.choice2.value    =response_quiz_data[0].choice2;
                document.forms.enter.choice3.value    =response_quiz_data[0].choice3;
                document.forms.enter.choice4.value    =response_quiz_data[0].choice4;
                document.forms.enter.answer_choice_no =response_quiz_data[0].answer_choice_no;
            });
            
            //削除ボタンが押された時
            $(".delete").on('click',function(){
                alert("削除します");
                $.ajax({
                    url: '/API/delete_quiz.php',
                    type:'POST',
                    //dataType: 'json',
                    data : {quiz_id : $(this).data('number')},
                    timeout:3000,
                }).done(function(data) {
                    read_quiz();
                }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("error");
                })
            });
        }).fail(function(XMLHttpRequest, textStatus, errorThrown){
            alert(errorThrown);
        });
    }
    read_quiz();
    //選択肢の数が変更された時に選択肢を表示・非表示
    
    $("#quiz_data_submit").on('click',function(){
        //var post_quiz_data　= '';
        var post_quiz_data = {
            "question" : $('#question').val(),
            //"qusetion_img" : $('#').val(),
            "question_type": $('#question_type').val(),
            "choice1" : $('#choice1').val(),
            "choice2" : $('#choice2').val(),
            "choice3" : $('#choice3').val(),
            "choice4" : $('#choice4').val(),
            "choice5" : $('#choice5').val(),
            "choice6" : $('#choice6').val(),
            "choice7" : $('#choice7').val(),
            "choice8" : $('#choice8').val(),
            "choice9" : $('#choice9').val(),
            "choice10" : $('#choice10').val(),
            "answer_choice_no" : $('#answer_choice_no').val()
        };
        var post_to_url = '/API/setQuiz.php';
        console.log(post_to_url);
        console.log(post_quiz_data);
        $.post(post_to_url, post_quiz_data,function(data){
            alert(data);
        });
        //post_quiz();
    });
    
    //タブの切り替えで、cssから表示・非表示をコントロールする
    $(".tab-item").on('click',function(){
        $(".tab-content").css("display", "block");
    });

    // $(".tab-content").css("display", "block");
    //"画像を使う"チェックボックスで、選択肢のフォームを変更する
    $("#which_type_of_choice").on('click',function(){
        if($("#which_type_of_choice").prop('checked')){
            $("#choice_is_sentence").css("display", "none");
            $("#choice_is_image").css("display", "block");
        }else{
            $("#choice_is_sentence").css("display", "block");
            $("#choice_is_image").css("display", "none");
        }
    });
    
    //クイズ確認タブをクリックした時
    $("#confirm2").on('click',function(){
        $("#quiz_tbody").empty();
        read_quiz();
    });
    
    //スマホではタブをスライドさせる機能
 

    //画像ファイルをjpgとpngに限定するスプリクト
    //「画像を使うに」にチェックを入れると、画像参照欄が登場するスクリプトor外すと消えるスクリプト
    ////propで始める
    //
});