<?php
/**
 * Created by PhpStorm.
 * User: halu
 * Date: 西元2018/3/6
 * Time: 下午2:43
 */


$data=[];


for ($i = 1 ; $i <= 10 ; $i ++){

    if($data["MAKUP_TEXT_"+$i+""] === false){

        $data->array_push(["MAKUP_TEXT_"+$i+""],"");
    }

}


$c = "a";
$d = "b";

function cvx($a,$b){

    $c= $a+$b;


    return $c ;
}


?>




