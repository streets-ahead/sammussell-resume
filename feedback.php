

	<div id='main_section'>
	<?php
		if(isset($_POST['email'])) {
			$to = "sam@sammussell.com";
			$subject = "website: " . $_POST['subject'];
			$body = 'Name: ' . $_POST['name'] . "\n\n" .
			 		$_POST['body'];
			$headers = 'From: ' . $_POST['email'] . "\r\n" .
	    				'Reply-To: ' . $_POST['email'] . "\r\n" .
	    				'X-Mailer: PHP/' . phpversion();
			if (mail($to, $subject, $body, $headers)) {
		   			  
			} else {
		   
			}
		} else {
			echo 'not working!';
		}
	?>
		<div class='main_center'>
			<div id="content" class="main" role="main">
				<div style="padding:0px 15px;">
					<h2 style='text-align:left;'>Thank You</h2>
					<p>Thank you for contacting me.  I will get back to you as soon as possible.</p>
					<div class="cleared"> </div>
				</div><!-- end -->
			</div><!-- end content -->
			
			
			
		</div><!-- end main_center -->
		
	</div><!-- end mainsection -->

