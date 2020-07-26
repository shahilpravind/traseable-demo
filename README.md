# TraSeable Gallery
This project was made for TraSeable Solutions as a way to learn their tools as well as for them to evaluate my work.

## Project Information
1. "gallery-server" contains laravel backend.
2. "gallery-app" contains ionic app with accompanying android and ios projects.
3. Uses PostgreSQL database for information storage.
4. Dark and light theme available.

## Running the Project
1. Download the repository.
2. Create a PostgreSQL database called "gallery". Ensure to set the password (and other relevant details) of the database in the laravel .env file found in "gallery-server/.env". 
3. Run migrate the database tables. To do this, open a command prompt/terminal window in "gallery-server" folder and run "php artisan migrate".
4. Execute the laravel server using "php artisan serve".
5. Open another command prompt/terminal window in "gallery-app" and execute "ionic serve".
6. App should be running. While the project contains android and ios projects, relevant IP addresses will need to be provided for it to work properly as localhost will not be usable.

NOTE: Laravel and ionic server needs to be default: laravel => localhost:8000 and ionic => localhost:8100

## Screenshots 

**(note: not a good depiction of app, best tested live. Provided for convenience)**

### Browser window at different sizes
<p>
  <img src="https://github.com/shahilpravind/traseable-demo/blob/master/screenshots/desktop-1.PNG" width="400" alt="Screenshot 1"> &nbsp;&nbsp;&nbsp;&nbsp;

  <img src="https://github.com/shahilpravind/traseable-demo/blob/master/screenshots/desktop-2.png" width="400" alt="Screenshot 2"> &nbsp;&nbsp;&nbsp;&nbsp;

  <img src="https://github.com/shahilpravind/traseable-demo/blob/master/screenshots/desktop-3.png" width="400" alt="Screenshot 3"> &nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br>

### Google Pixel Resolution (using browsers responsive features)
<p>
  <img src="https://github.com/shahilpravind/traseable-demo/blob/master/screenshots/pixel-dark.png" width="400" alt="Screenshot 1"> &nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br>

### iPad Resolutions (using browsers responsive features)
<p>
  <img src="https://github.com/shahilpravind/traseable-demo/blob/master/screenshots/ipad-dark.png" width="400" alt="Screenshot 1"> &nbsp;&nbsp;&nbsp;&nbsp;

  <img src="https://github.com/shahilpravind/traseable-demo/blob/master/screenshots/ipad-pro-light.png" width="400" alt="Screenshot 2"> &nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br>

### Camera
<p>
  <img src="https://github.com/shahilpravind/traseable-demo/blob/master/screenshots/camera.png" width="400" alt="Screenshot 1"> &nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br>

### Image Popover
<p>
  <img src="https://github.com/shahilpravind/traseable-demo/blob/master/screenshots/popover-phone.png" width="400" alt="Screenshot 1"> &nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br>

&copy; 2020 Shahil Avishal Pravind. All rights reserved.
