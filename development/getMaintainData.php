<?php
/**
 * Created by PhpStorm.
 * User: halu
 * Date: 西元2018/2/26
 * Time: 上午11:18
 */

require_once('phpinit.php');
require('psw.php');
$_REQUEST["TIMES"] = "1";
$_REQUEST["MARKNO"] = "IPSA";
//$_REQUEST["VIPIDS"] = "8901010002";


//陣列轉XML function
function array2xml($data, $tag = '')
{
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

if(isset($_REQUEST["VIPIDS"])){

    $XmlData = array(



        "COLLECTION" => array(
            "LOGIN" => array(
                "ROW" => array(
                    "VENIDS" => $UserID,
                    "VENPWD" => $Pwd)),
            "REQUEST" => array(
                "ROW" => array(
                    "MARKNO" => $_REQUEST["MARKNO"],
                    "VIPIDS" => $_REQUEST["VIPIDS"],
                    "TIMES" =>$_REQUEST["TIMES"]))
        )
    );



    $xml = array2xml($XmlData);

    $requestString = strval($xml);

//echo $requestString ,"\n";

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

        $result = $client->__soapCall("WS_GETIPSASKINCARE",

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
//    var_dump(html_entity_decode($client->__getLastRequest(),ENT_QUOTES | ENT_XML1, 'UTF-8'));
//    echo "<br>";
//    echo("\nDumping response headers:\n");
//    var_dump($client->__getLastResponseHeaders());
//    echo "<br>";
//    echo("\nDumping response:\n");
//    var_dump($client->__getLastResponse());



//    printf('Result = %s' , $result->WS_UPDVIPBASEResult);

        $bcXml = simplexml_load_string($result->WS_GETIPSASKINCAREResult);

        $RTNCODE = (int)$bcXml->WSTATUS->ROW->RTNCODE;

        $ROWLEN = count($bcXml->RTNDATA->ROW);

//        echo $ROWLEN;

        if($RTNCODE === 0){


//        $_SESSION['BCNAME'] = (string)$bcXml->RTNDATA1->ROW->BCNAME;
//
//        $_SESSION['CUSTNO'] = (string)$bcXml->RTNDATA2->ROW->CUSTNO;
//
//        $_SESSION['CMABNM'] = (string)$bcXml->RTNDATA2->ROW->CMABNM;

            if($ROWLEN === 0){

                header("content-type:text/xml");

                echo '<?xml version="1.0" encoding="utf-8"?>';

                echo"<RTNMSG>查無檢驗資料</RTNMSG>";
//               echo $requestString;

            }else{

                header("content-type:text/xml");

                echo '<?xml version="1.0" encoding="utf-8"?>';

                echo $result->WS_GETIPSASKINCAREResult;

//                echo $requestString;
            }

        }else{

            header("content-type:text/xml");

            $xml = $bcXml->WSTATUS->ROW->RTNCODE;

            echo $xml;

        }


    }catch(Exception $e){

        printf("Message = %s",$e->__toString());

    }

}else{

    echo "VIPID錯誤";


}



