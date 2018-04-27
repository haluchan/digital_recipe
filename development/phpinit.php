<?php
/**
 * Created by PhpStorm.
 * User: halu
 * Date: 西元2018/2/9
 * Time: 下午5:25
 */
ob_start();
session_start();
ini_set('display_errors', 'on'); //顯示錯誤訊息
ini_set('log_errors', 1); //錯誤log 檔開啟
ini_set('error_log', dirname(__FILE__) . '/error_log.txt'); //log檔位置
ini_set('default_charset',"utf-8");
ini_set('upload_max_filesize','8m');
date_default_timezone_set("Asia/Taipei");
ini_set("soap.wsdl_cache_enabled", "0");
error_reporting(E_ALL); //錯誤回報

//引用外部xml
//libxml_disable_entity_loader(false);
//$opts = array(
//    'ssl'   => array(
//        'verify_peer'          => false
//    ),
//    'https' => array(
//        'curl_verify_ssl_peer'  => false,
//        'curl_verify_ssl_host'  => false
//    )
//);
//$streamContext = stream_context_create($opts);
//$client = new SoapClient("https://urlToSoapWs",
//    array(
//        'stream_context'    => $streamContext
//    ));
?>