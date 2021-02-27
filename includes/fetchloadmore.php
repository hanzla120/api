<?php 

if(isset($_GET['username']) && isset($_GET['next_page']) && !empty($_GET['username']) && !empty($_GET['next_page'])){
	
	
$username = $_GET['username'];
$next_page = $_GET['next_page'];
$url = "https://www.instagram.com/".$username."/";
		// echo $html = file_get_contents($url);
		
	$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);

$result = curl_exec($curl);

if(curl_errno($curl)) // check for execution errors
{
	echo 'Scraper error: ' . curl_error($curl);
	exit;
}

curl_close($curl);


$arr = explode('window._sharedData = ',$result);
		$arr = explode(';</script>',$arr[1]);
		$obj = json_decode($arr[0] , true);
		
		// $get_json = json_encode($obj,JSON_PRETTY_PRINT);
		  // $rhx_gis = 	$obj['rhx_gis'];

	
	
		
		$id = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['id'];
		$media_timeline = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_owner_to_timeline_media']['edges'];
		
		
		$media_count = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_owner_to_timeline_media']['count'];
		$has_next_page = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_owner_to_timeline_media']['page_info']['has_next_page'];
		
		
		
		$get_json = json_encode($obj,JSON_PRETTY_PRINT);
		
		if($has_next_page == true){
			
			$end_cursor = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_owner_to_timeline_media']['page_info']['end_cursor'];
			$count_pages = 12;
			
		
			$url = "https://www.instagram.com/graphql/query/?query_hash=";
			
			$query_hash = "f2405b236d85e8296cf30347c9f08c2a";
			$variable = '{"id":"'.$id.'","first":'.$count_pages.',"after":"'.$next_page.'"}';
			
			$variable = urlencode($variable);
			
			$url_plus = $url.$query_hash."&variables=".$variable;
			
			$rg = "d948a6806620394a2ec0fdb35a6d4840";
			
		
		
	$signature = md5(''.$rg.':{"id":"'.$id.'","first":'.$count_pages.',"after":"'.$next_page.'"}');

	
	// echo "<br />Signature : ".$signature;
	// echo "<br />url : ".$url_plus;
			// die;
// $opts = array(
  // 'http'=>array(
    // 'method'=>"GET",
    // 'header'=>"user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
// x-ig-app-id: 936619743392459
// x-instagram-gis: $signature
// x-requested-with: XMLHttpRequest"
  // )
// );
// $context = stream_context_create($opts);
// $get_json = file_get_contents($url_plus, false, $context);

$header = array();
$header[] = "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36
x-ig-app-id: 936619743392459
x-instagram-gis: $signature
x-requested-with: XMLHttpRequest";
$curl = curl_init();

curl_setopt($curl,CURLOPT_URL,$url_plus);
curl_setopt($curl,CURLOPT_HTTPHEADER,$header);
$get_json = curl_exec($curl);
$json_decode = json_decode($get_json);








$json = json_decode($get_json,true);
	@$has_next_page_2 = $json['data']['user']['edge_owner_to_timeline_media']['page_info']['has_next_page'];




 // echo $get_json;
	


/// load more functionality start 

		  // $limit = 12;
          // $tryNext = true;
          // $found = 0;
          // $images_all = array();

			// while($tryNext){
				// $tryNext = false;
				// $remote = file_get_contents($url_plus, false, $context);
				// $response = $remote;
   
              // if ($response === false) {
                  // return false;
              // }
              // $data = json_decode($response, true);
           
              // if ( $data === null) {
                  // return false;
              // }
			  
			  // echo $response; 
			 
			 
			  
			// }





///  end 
	
		}else{
			echo "no next page found.";
		}
		
		// echo "<br />
		// <br />
		// <br />
		// <br /><pre>". $get_json."</pre>";
		
	// echo "<pre>";
		// echo var_dump($obj);
		// die;	
				
		
		
		$get_hd_image = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['profile_pic_url_hd'];
		
		// $profile_pic = $json_decode['user']['hd_profile_pic_versions'][0]['url'];
		
		$username = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['username'];
		$full_name = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['full_name'];
		$follower_count = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_followed_by']['count'];
		$following_count = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_follow']['count'];
		// $following_count = $json_decode['user']['following_count'];
		// $media_count = $json_decode['user']['media_count'];
		$biography = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['biography'];
		$external_url = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['external_url'];
		$is_private = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['is_private'];
		
		
			
		
		
		
		
		// echo $username;
		// echo $full_name;
		// echo $media_count;
		// echo $follower_count;
		// echo $following_count;
		// echo $biography;
		// echo $external_url;
		// echo $get_hd_image;
}else{
	echo "error";
}
		?>