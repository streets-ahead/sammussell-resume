<?php

$ch = curl_init("http://streetsaheadllc.com/article/user/Sam.json");

$response = curl_exec($ch);

$responseInfo = curl_getinfo($ch);
curl_close($ch);
  
if( intval( $responseInfo['http_code'] ) == 200 ) {
	return $response;    
} else {
	return false;
}

echo $response;
?>