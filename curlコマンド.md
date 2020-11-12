
### 問題登録API(画像なし)
* curl -X POST http://54.250.159.207/API/setQuiz.php -d "question=ntv?&question_img=1&question_type=1&choice1=1&choice2=2&choice3=3&choice4=4&choice5=5&choice6=6&choice7=7&choice8=8&choice9=9&choice10=12&answer_choice_no=4"

### 問題登録API(画像あり)
* curl -X POST http://54.250.159.207/API/setQuiz.php -d "question=ntv?&question_type=1&choice1=1&choice2=2&choice3=3&choice4=4&choice5=5&choice6=6&choice7=7&choice8=8&choice9=9&choice10=12&answer_choice_no=4" -F name=mondaiGazo -F FILE=@/Users/sogawa/Desktop/how/AWS/test1.png http://54.250.159.207/API/setQuiz.php