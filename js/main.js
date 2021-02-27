window.fadeIn = function(obj) {
    $(obj).fadeIn(1000);
}
function short_number(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}
(function ($) {
    "use strict";


        
    

/* tab functions */




    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var username = $("#username").val().trim();
		var email = $("#email").val().trim();
		 var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
		
		if(username != "" && email != ""){
			
			get_data(username,email);
			
			function get_data(username,email){
				
				$.getJSON({
					
					url: "includes/profile.php?username="+username, 
				 method:"GET",
				 beforeSend: function(){
					 
					 $(".check_userinfo").addClass("running");
					 $("#submit-button").attr("disabled","disabled");
					$("#submit-text").text("");
					 
					
				 },
				 success: function(data){
					 
					 console.log(data);
					 var status = data.status;
					 
					 
					if(status == "true"){
						
// $(".tab-step-1").on("click",function(){
	
		// $(".tab-step-1").addClass("current");
		// $(".tab-step-2").removeClass("current");
		// $(".step-2").fadeOut("fast");
		// $(".step-1").fadeIn("fast");
		
	
// });
$(document).on("click",".gallery-item",function (e) {
			
				$(this).children(".gallery-item-info").toggleClass("display");
				$(this).find("i").toggleClass("visibility");
				$(this).children(".add-new-likes").toggleClass("visibility");
				// selected media code start 
				
			
			if ($(".gallery-item-info.display").length <= 6) {
							var package_quantity = parseInt(500);
					var selected_media_length = $(".gallery-item-info.display").length;
					var likesForPerMedia = Math.floor(package_quantity / selected_media_length);
var likesForLastItem = package_quantity - (likesForPerMedia*selected_media_length);
var newlikesForPerMedia = likesForPerMedia+likesForLastItem;
					
					var eachCount = 1;
					 var product_quantity;
					 $.each($(".gallery-item-info.display"), function(){
						 
						 if(eachCount==selected_media_length){
var newLikesForMedia = likesForPerMedia+likesForLastItem;
}else{

newLikesForMedia = likesForPerMedia; 
}
  product_quantity = newLikesForMedia;
			$(this).siblings('.add-new-likes').find('span').text(" +"+product_quantity+" Likes");
				eachCount = eachCount+1;
			});
				
				
			}
			
			
			// end selected media
			
				 
			 if ($(".gallery-item-info.display").length > 6) {
				alert("you can not select more then 6 image in free trial.");
				$(this).children(".gallery-item-info").removeClass("display");
				$(this).find("i").removeClass("visibility");
				$(this).children(".add-new-likes").removeClass("visibility");
				return false;
			}
			
			
				
		
			
		  
		});
		
			
			
			
		
		
		
		
		
		
		
					

						$("#next_btn").click(function(){
							
			var jsonObj  = [];
			
			     
			 
			 var length = $(".gallery-item-info.display").length;
				
				if(length == 0){
					
					alert("Select 1 or more image please");
				}else{
					
					var package_quantity = parseInt(500);
					var selected_media_length = length;
					var likesForPerMedia = Math.floor(package_quantity / selected_media_length);
var likesForLastItem = package_quantity - (likesForPerMedia*selected_media_length);
var newlikesForPerMedia = likesForPerMedia+likesForLastItem;
					
					var eachCount = 1;
					 $.each($(".gallery-item-info.display"), function(){
						 
						 if(eachCount==selected_media_length){
var newLikesForMedia = likesForPerMedia+likesForLastItem;
}else{ newLikesForMedia = likesForPerMedia; }
 var product_quantity = newLikesForMedia;
						 
						 
						 var id = $(this).attr("data-id");
						 var img_src = $(this).attr("data-src");
						 var code = $(this).attr("data-code");
						 
		var item = {}
        item ["id"] = id;
        item ["img_src"] = img_src;
        item ["code"] = code;
        item ["product_quantity"] = product_quantity;

        jsonObj.push(item);
				eachCount = eachCount+1;
			});
			
			
			$(".tab-step-3").addClass("current");
		$(".tab-step-2").removeClass("current");
		$(".step-2").fadeOut("fast");
		$(".step-3").fadeIn("fast");
			
			
				var photo_link,photo_src,code,product_quantity;
				$.each(jsonObj,function(key,value){
					
					 photo_link = value.id;
					 photo_src = value.img_src;
					 code = value.code;
					 product_quantity = value.product_quantity;
					 
					 $(".order_details").append(`<tr><td class="product-thumb">
                                    <a href="#" class="item-thumb">
                                        <img src="${photo_src}" width="92">
                                    </a>
                                </td>
                              
                                <td class="product-quantity" data-title="Quantity">
                                    <div class="quantity">${product_quantity}</div>
                                </td>
                                <td class="total-price" data-title="Total Price">
                                    <a href="${photo_link}" target="_blank">Click Here</a>
                                </td>
								<td class="total-price" data-title="Profile Code">
                                  ${code}
                                </td></tr>`);
					 
					 
					 	
				});
			
			
			
		
			
				}
			
			
							
							return false;
						});
						
						
						
						
						$(".tab-step-1").removeClass("current");
						$(".tab-step-2").addClass("current");
						$(".step-1").removeClass("current");
						$(".step-2").addClass("current");
						$(".step-1").fadeOut("fast");
					$(".step-2").fadeIn("fast");
					
					
						// fetch data variables
						var instagram_username = data.instagram_username;
						var user_fullname = data.user_fullname;
						var user_followers = data.user_followers;
						var user_following = data.user_following;
						var total_posts = data.total_posts;
						var user_description = data.user_description;
						var user_link = data.user_link;
						var private_account = data.private_account;
						var user_profile_pic = data.user_profile_pic;
						var next_page = data.next_page;
						var end_cursor = data.end_cursor;
						var media_nodes = data.media_nodes;
							
							
						
						if(next_page == true){
							
							$(".btn_load").on("click",function(){
								
								loadmore();
								
					function loadmore(){
									
								
								$.ajax({
					
					url: "includes/fetchloadmore.php?username="+username+"&next_page="+end_cursor,
					dataType: "json",
					beforeSend: function(){
						
						
						$(".btn_load").hide();
						$(".load_class").addClass("loader");
						
						
						
					},
					success: function(data){
						
						
						 
						var getMediatimeline = data.data.user.edge_owner_to_timeline_media.edges;
						console.log(getMediatimeline);
						var has_next_page = data.data.user.edge_owner_to_timeline_media.page_info.has_next_page;
						 end_cursor = data.data.user.edge_owner_to_timeline_media.page_info.end_cursor;
						
				
					if(has_next_page == true){
						
							$.each( getMediatimeline, function( key, media ) {
						
						var node = media['node'];
						
					if(node['__typename'] && node['__typename'] !== "GraphImage" && node['__typename'] !== "GraphVideo"&& node['__typename'] !== "GraphSidecar"){
						return;
					}
					
					var thumbnail_src = node['thumbnail_src'];
					var display_url = node['shortcode'];
					var like_count = node['edge_media_preview_like']['count'];
					var comment_count = node['edge_media_to_comment']['count'];
				
				// $(".row.text-center.text-lg-left").append('<div class="col-lg-3 col-md-4 col-xs-6">'+thumbnail_src+'</div>');
				
							$(".gallery").append('<div class="gallery-item" tabindex="0"><img onload="fadeIn(this)" id="https://www.instagram.com/p/'+display_url+'" src="'+thumbnail_src+'"  class="gallery-image" alt=""><div class="add-new-likes"><i class="fas fa-heart"></i> <span> 0 </span> </div><div class="gallery-item-type"><i class="fas fa-check "></i></div><div data-code="'+display_url+'" data-id="https://www.instagram.com/p/'+display_url+'" data-src="'+thumbnail_src+'" class="gallery-item-info"><ul class="item-info-settings"><li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> '+short_number(like_count,1)+'</li><li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> '+short_number(comment_count,1)+'</li></ul></div></div>');
					
					
					
						
					});
					}
					
					},
					error: function(){
					
					alert("please reload page.Error occur");
					},
					complete:function(){
						$(".btn_load").show();
						$(".load_class").removeClass("loader");
						
					
					
					}
					
				});
					}
								
								
								
								
								
								
								
								
								
								return false;
							});
							
						}else{
							alert("Next Page not found!");
						}
					
					if(private_account == true){
						$("#private-text").html("This Account is Private. Your Account Must be Public.");
							$(".btn_load").fadeOut("fast");
							$(".check_userinfo").fadeOut("fast");
						}
					
					
					
					
					// update data 
					$("#text-username").text(instagram_username);
					$(".profile-user-name").text(user_fullname);
					
					$("#user_followers").text(short_number(user_followers,1));
					$("#user_following").text(short_number(user_following,1));
					$("#total_posts").text(short_number(total_posts,1));
					$("#user_description").text(user_description);
					$("#profile_pic").attr("src",user_profile_pic);
					
					$.each( media_nodes, function( key, media ) {
						
						var node = media['node'];
						
					if(node['__typename'] && node['__typename'] !== "GraphImage" && node['__typename'] !== "GraphVideo"&& node['__typename'] !== "GraphSidecar"){
						return;
					}
					
					var thumbnail_src = node['thumbnail_src'];
					var display_url = node['shortcode'];
				var like_count = node['edge_media_preview_like']['count'];
					var comment_count = node['edge_media_to_comment']['count'];
				// $(".row.text-center.text-lg-left").append('<div class="col-lg-3 col-md-4 col-xs-6">'+thumbnail_src+'</div>');
						$(".gallery").append('<div class="gallery-item" tabindex="0"><img onload="fadeIn(this)" id="https://www.instagram.com/p/'+display_url+'" src="'+thumbnail_src+'"  class="gallery-image" alt=""><div class="add-new-likes"><i class="fas fa-heart"></i>  <span>0</span></div><div class="gallery-item-type"><i class="fas fa-check"></i></div><div data-code="'+display_url+'" data-id="https://www.instagram.com/p/'+display_url+'" data-src="'+thumbnail_src+'" class="gallery-item-info"><ul class="item-info-settings"><li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> '+short_number(like_count,1)+'</li><li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> '+short_number(comment_count,1)+'</li></ul></div></div>');
					});
					
					 $('html, body').animate({
        scrollTop: $(".tab-step-2").offset().top
    }, 1000);
					
					
					
						
					}else if(status == "false"){
						showValidate(input[0]);
						$(".username_attr").attr("data-validate","Type Correct Instagram username!");
						
					$(".check_userinfo").removeClass("running");
					$("#submit-button").removeAttr("disabled","disabled");
					$("#submit-text").text("Submit");
						check = false;
					}else{
						console.log("Something Wrong try again!");
					}
				 },
				 error: function(){
					alert("Something Wrong Try again!");
					
				},
				complete:function(){
					
					// $("#spinner").fadeOut("fast");
					// $("#search-button").fadeIn("fast");
					
					
					$(".check_userinfo").removeClass("running");
					
					$("#submit-button").removeAttr("disabled","disabled");
					$("#submit-text").text("Next");

				}
					
				});
				
			}
			
			
		}else{
			return false;
		}
		
		
       return false
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
		
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);