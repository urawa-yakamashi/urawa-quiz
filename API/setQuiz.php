<?php

    require_once  dirname(__FILE__) . '/databaseFunctionList.php';
    $returnedPDO = connectDatabase();

    //DBの取得に失敗した場合
    if(is_null($returnedPDO)){
        echo 'データベースの取得に失敗しました。';
    }
    
    //INSERT
    // $sql = 'SELECT name, colour, calories
    // FROM fruit
    // WHERE calories < :calories AND colour = :colour';
    // $sth = $dbh->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    // $sth->execute(array(':calories' => 150, ':colour' => 'red'));
    // $red = $sth->fetchAll();
    // $sth->execute(array(':calories' => 175, ':colour' => 'yellow'));
    // $yellow = $sth->fetchAll();
    
    $quizTable = $returnedPDO ->prepare("insert into t_quiz values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now());");
    //$query = $returnedPDO ->prepare("insert into t_quiz values(null,ntv?,nullnow(),now());");
    //$quizTable = $returnedPDO ->prepare("insert into t_quiz values(null,'ntv?',222,0,1,2,3,4,5,6,7,8,9,12,4,now(),now());");
    
    //$quizTableNUllJudge = $quizTable -> execute();
    //フロントからPOSTされたデータをDBにinsertする。
    //$quizTableNUllJudge = $quizTable -> execute([null,$_POST["question"],$_POST["question_img"],$_POST["question_type"],$_POST["choice1"],$_POST["choice2"],$_POST["choice3"],$_POST["choice4"],$_POST["choice5"],$_POST["choice6"],$_POST["choice7"],$_POST["choice8"],$_POST["choice9"],$_POST["choice10"],$_POST["answer_choice_no"]]);
    
    $quizTableNUllJudge = $quizTable->execute(array(
        null,
        $_POST["question"],
        $_POST["question_img"],
        $_POST["question_type"],
        $_POST["choice1"],
        $_POST["choice2"],
        $_POST["choice3"],
        $_POST["choice4"],
        $_POST["choice5"],
        $_POST["choice6"],
        $_POST["choice7"],
        $_POST["choice8"],
        $_POST["choice9"],
        $_POST["choice10"],
        $_POST["answer_choice_no"]
    ));
    
    //echo $_POST["question"];//POST変数OK
    echo $_POST["question_img"];
    echo '接続成功';
    //echo $_POST["question_type"];
    // echo $_POST["choice1"];
    // print_r($_POST["choice2"]);
    // print_r($_POST["choice3"]);
    // print_r($_POST["choice4"]);
    // print_r($_POST["choice5"]);
    // print_r($_POST["choice6"]);
    // print_r($_POST["choice7"]);
    // print_r($_POST["choice8"]);
    // print_r($_POST["choice9"]);
    // print_r($_POST["choice10"]);
    // print_r($_POST["answer_choice_no"]);
    // //INSERTに失敗した場合
    if($quizTable != 1){
        echo 'INSERTに失敗しました。';
    }
    //返り値
    //$sqlがnullの場合、falseなどエラーを返す必要がある場合
?>