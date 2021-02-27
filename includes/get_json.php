<?php 

if(isset($_GET['username']) && !empty($_GET['username'])){
	
	
$username = $_GET['username'];
$url = "https://www.instagram.com/".$username."/";
		// echo $html = file_get_contents($url);
		
	$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);

$page = curl_exec($curl);

if(curl_errno($curl)) // check for execution errors
{
	echo 'Scraper error: ' . curl_error($curl);
	exit;
}

curl_close($curl);


$arr = explode('window._sharedData = ',$page);
		@$arr = explode(';</script>',$arr[1]);
		@$obj = json_decode($arr[0] , true);
		@$id = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['id'];
		@$get_hd_image = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['profile_pic_url_hd'];
		@$data_username = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['username'];
		@$full_name = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['full_name'];
		@$follower_count = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_followed_by']['count'];
		@$following_count = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_follow']['count'];
		@$media_count = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['edge_owner_to_timeline_media']['count'];
		@$biography = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['biography'];
		@$external_url = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['external_url'];
		@$is_private = $obj['entry_data']['ProfilePage'][0]['graphql']['user']['is_private'];
		
		
$json_array = array(
					"user_id"=>$id,
					"instagram_username"=>"$data_username",
					"user_fullname"=>"$full_name",
					"user_followers"=>"$follower_count",
					"user_following"=>"$following_count",
					"total_posts"=>"$media_count",
					"user_description"=>$biography,
					"user_link"=>"$external_url",
					"private_account"=>$is_private,
					"user_profile_pic"=>"$get_hd_image"
					);

$get_json_data =  json_encode($json_array);
	echo $get_json_data;
}
		?>