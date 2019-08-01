<?php
/**
 * Created by PhpStorm.
 * User: halu
 * Date: 西元2018/1/26
 * Time: 下午7:51
 */
require('psw.php');
//$pwd = 'SSD@74475668';
$ip = 'https://203.67.100.36:80';
//$UserID="innity";
$MARKNO = "IPSA";
header('Content-Type: application/json; charset=UTF-8');

//
//$_REQUEST["CUSTNO"]='1001';
//$_REQUEST["VIPNM"]='謝佳伶';
//$_REQUEST["SBIRTH"]='1993/10/22';
//$_REQUEST["MAIL"]='hua_rain@yahoo.com.tw';
//$_REQUEST["TELM"]='0912345693';


//陣列轉XML function
function array2xml($data, $tag = ''){
    $xml = '';

    foreach ($data as $key => $value) {
        if (is_numeric($key)) {
            if (is_array($value)) {
                $xml .= "<$tag>";
                $xml .= array2xml($value);
                $xml .= "</$tag>";
            } else {
                $xml .= "<$tag>$value</$tag>";
            }
        } else {
            if (is_array($value)) {
                $keys = array_keys($value);
                if (is_numeric($keys[0])) {
                    $xml .= array2xml($value, $key);
                } else {
                    $xml .= "<$key>";
                    $xml .= array2xml($value);
                    $xml .= "</$key>";
                }

            } else {
                $xml .= "<$key>$value</$key>";
            }
        }
    }
    return $xml;
}

if(isset($_REQUEST["VIPNM"] , $_REQUEST["SBIRTH"] , $_REQUEST["MAIL"])){

    $XmlData = array(

        "COLLECTION" => array(
            "LOGIN" => array(
                "ROW" => array(
                    "VENIDS" => $UserID,
                    "VENPWD" => $Pwd)),
            "REQUEST" => array(
                "ROW" => array(
                    "MARKNO" => "IPSA",
                    "VIPNM" => $_REQUEST["VIPNM"],
                    "SBIRTH" => $_REQUEST["SBIRTH"],
                    "MAIL" => $_REQUEST["MAIL"],
                    "TELM" => ""
                ))
        )
    );



    $xml = array2xml($XmlData);

    $requestString = strval($xml);

//echo $requestString;

    try{

        $options = [
            "soapaction" => "http://tempuri.org/",
            "soap_version" => SOAP_1_2,
            "trace" => 1,  //配合下面報錯，追蹤

//        配合抓包工具用，測完後可關閉
//        "proxy_host" => "localhost",
//        "proxy_port" => 8899,
//        "stream_context" => stream_context_create([
//            'ssl' => [
//                'cafile' => '/usr/local/etc/charles-ssl-proxying-certificate.cer',
//                'verify_peer' => false,
//                'verify_peer_name' => false,
//                'allow_self_signed' => true
//            ]
//        ])
        ];

        $url = $ip . '/WebService/wsSHISEIDO.asmx?wsdl';

        $client = new SoapClient($url,$options);

        $result = $client->__soapCall("WS_GETVIPBASE",

            [array("XmlData"=>$requestString)]

        );

//    var_dump($client->__getFunctions());//打印暴露的方法
//    print("<br/>");
//    var_dump($client->__getTypes());//打印對應方法的參數和參數類型
//    print("<br/>");
//    echo("\nDumping request headers:\n");
//    var_dump($client->__getLastRequestHeaders());
//    echo "<br>";
//    echo("\nDumping request:\n");

//echo header("Content-Type:text/html; charset=utf-8");
//   var_dump(html_entity_decode($client->__getLastRequest(),ENT_QUOTES | ENT_XML1, 'UTF-8'));//解決括弧<>編碼
//    echo "<br>";
//    echo("\nDumping response headers:\n");
//    var_dump($client->__getLastResponseHeaders());
//    echo "<br>";
//    echo("\nDumping response:\n");
//   var_dump(html_entity_decode($client->__getLastResponse(),ENT_QUOTES | ENT_XML1, 'UTF-8'));



//    printf('Result = %s' , $result->WS_GETBCSHCUSTNOResult);

        $bcXml = simplexml_load_string($result->WS_GETVIPBASEResult);

      echo json_encode($bcXml);



    }catch(Exception $e){

        printf("Message = %s",$e->__toString());

    }

}else{


}


?>
