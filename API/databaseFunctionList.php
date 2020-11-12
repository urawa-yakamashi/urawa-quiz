<?php
function connectDatabase(){
    //データベースへのログイン情報
    $userId = 'sogawa';
    $password = '1234cast';
    $dataBaseName = 'second_training';

    //戻り値となるSQL
    $pdo = null;
    try {
        $pdo = new PDO ('mysql:host=localhost;dbname='. $dataBaseName .';charset=utf8', $userId, $password);
        return $pdo;
    } catch ( PDOException $e ) {
        print "接続エラー:{$e->getMessage()}";
    }
}
?>
