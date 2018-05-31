<?php
/**
 * Created by PhpStorm.
 * User: halu
 * Date: 西元2018/2/6
 * Time: 下午2:50
 */


$psn = 54395064;
$psnString = $psn .''; //toString

$ip = 'https://210.208.107.109:80';
$UserID="innity";
//$UserID="innity54395064"; //測試環境用
$dayArry = array();
$psnArry = array();
$tmpArry = array();
$tmpStringArray = array();
$PwdTmp = array();


$ymd = date("Y/m/d");

$ymdCheck = explode("/",$ymd);

$ymdString = $ymdCheck[0].$ymdCheck[1].$ymdCheck[2];

// $ymdCheck[0] = 年 , $ymdCheck[1] 月 , $ymdCheck[2] 日

//print_r($ymdCheck);

//print_r($ymdString);


//轉換型態
for($i = 0 ; $i < strlen($psn) ;$i++){
    $dayArry[$i] = (int)$ymdString[$i];
    $psnArry[$i] = (int)$psnString[$i];
    $tmpArry[$i] = $dayArry[$i] + $psnArry[$i];
    $tmpStringArray[$i] = (string)$tmpArry[$i];

}

//foreach ($tmpStringArray as $key => $value){
//
//    echo "tmpStringArray", $key , "=>" , $value ,"\n";
//
//}

$tmpNum = count($tmpStringArray);

for($i = 0 ; $i < $tmpNum ; $i++){
    if(strlen($tmpStringArray[$i]) === 1){

        array_push($PwdTmp,$tmpStringArray[$i]);

    }else{
        array_push($PwdTmp,$tmpStringArray[$i][1]);
    }


}


//foreach ($PwdTmp as $key => $value){
//
//    echo $key , "=>" , $value ,"\n";
//
//}


$PwdString = implode($PwdTmp);

//echo $PwdString;

$Pwd="SSD@" . $PwdString; //密碼 SSD@+54395064+當日年月日 不進位