In this lab, you will follow a tutorial to setup an Node.js/Express server on an Amazon EC2 instance.

1. Complete the tutorial at: AWS EC2 Tutorial (Amazon Embedded Linux, Node.js, Express)
2. Create a new info.html and style.css files using the following templates. Update the template with your information and include a photo of yourself.

### info.html
```
<!DOCTYPE html>
<html lang="en">
   <meta charset="UTF-8">
   <link href="stylesheets/style.css" rel="stylesheet">

   <title>My Information</title>
   <body>
      <div id="myCard" class="card">
         <div class="container">
            <h4 class= "Titles" id="Title_Card1"><b>Student Information:</b></h4>
            <div class="Container">Maximus Decimus Meridius</div>
            <div class="Container">University of Arizona</div>
            <div class="Container">Maximus_Meridius@email.arizona.edu</div>
            <div class="Container">
               <img src="images/photo.jpg" width="250px" height="250px">
            </div>
         </div>
      </div>
   </body>
</html>
```

### style.css
```
   .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 2px;
    width : 350px;
    padding: 2px 16px;
    float: left;
    border-top: 25px solid #09f;
    margin: 10px;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container h4 {
    padding: 10px;
    padding-left: 0px;
    margin: 0px;
}
.Container {
    float: left;
    padding: 0px 15px;
    margin: 3px;
}
```
3. Make sure to replace the information with yours, and save the files as info.html, style.css and your photo as photo.jpg.
4. Add the files to appropriate locations on your server:
  * info.html should be located in the directory myapp/public.
  * style.css should be located in the directory myapp/public/stylesheets
  * photo.jpg should be located in the directory myapp/public/images.
  * Be sure to upload a photo of yourself.

5. Then, in this lab, submit a lab.html file with complete links (i.e., with port number) to your info.html webpage on your server.

6. The unit test in this lab will only check that the submitted lab.html file contains a link to your server. The complete grading of the lab will occur by visiting your server. Again, be sure to keep your server running.
