$(document).ready(function(){



});




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


//
//
//
// adduser cwrage
// 4  clear
// 5  apt-get update
// 6  sudo apt-get install nginx
// 7  sudo ufw app list
// 8  sudo ufw allow 'Nginx HTTP’
// 9  sudo ufw allow Nginx HTTP
// 10  nginx -t
// 11  sudo apt-get install build-essential
// 12  ls
// 13  apt-get install nodejs
// 14  ssh-keygen -t rsa -b 4096 -C "cwrage77@gmail.com"
// 15  eval $(ssh-agent -s)
// 16  ssh-add ~/.ssh/id_rsa
// 17  cat ~/.ssh/id_rsa.pub
// 18  ls
// 19  cd ~/../
// 20  ls
// 21  mkdir anom
// 22  cd anom
// 23  ls
// 24  clear
// 25  ls
// 26  echo "# anomyzeCore" >> README.md
// 27  git init
// 28  git add README.md
// 29  git commit -m "first commit"
// 30  git remote add origin git@github.com:cwrage77/anomyzeCore.git
// 31  git push -u origin master
// 32  git
// 33  git remote add origin git@github.com:cwrage77/anomyzeCore.git
// 34  git push -u origin master
// 35  git status
// 36  clear
// 37  git push origin master
// 38  ssh git@github.com:cwrage77/anomyzeCore.git
// 39  echo "# anomyzeCore" >> README.md
// 40  git init
// 41  git add README.md
// 42  git commit -m "first commit"
// 43  git remote add origin https://github.com/cwrage77/anomyzeCore.git
//     44  git config --global user.email "cwrage@gmail.com"
// 45  git config --global user.name "cwrage77"
// 46  git remote add origin https://github.com/cwrage77/anomyzeCore.git
//     47  echo "# anomyzeCore" >> README.md
// 48  git init
// 49  git add README.md
// 50  git commit -m "first commit"
// 51  git remote add origin https://github.com/cwrage77/anomyzeCore.git
//     52  git push -u origin master
// 53  clear
// 54  git status
// 55  clear
// 56  ls
// 57  mkdir core
// 58  nano README.md
// 59  ls
// 60  git status
// 61  git add *
// 62  git commit -m "init"
// 63  git push origin master
// 64  clear
// 65  ls
// 66  nano /etc/nginx/sites-available/default
// 67  rm /etc/nginx/sites-available/default
// 68  nano /etc/nginx/sites-available/default
// 69  nginx -t
// 70  sudo service nginx restart
// 71  clear
// 72  ls
// 73  cd core
// 74  ls
// 75  l
// 76  ls
// 77  mkdir web
// 78  cd web/
// 79  ls
// 80  nano web.js
// 81  nano package.json
// 82  npm install
// 83  apt install npm
// 84  clear
// 85  ls
// 86  npm install
// 87  node web.js
// 88  apt install nodejs-legacy
// 89  node web.js
// 90  nano web.js
// 91  node web.js
// 92  nano web.js
// 93  rm web.js
// 94  nano web
// 95  nano web.js
// 96  mkdir public
// 97  cd public/
// 98  nano index.html
// 99  mkdir js
// 100  cd js
// 101  nano engine.io.js
// 102  nano jquery-1.7.2.min.js
// 103  nano jquery.activity-indicator-1.0.0.js
// 104  nano main.js
// 105  cd ..
// 106  mkdir css
// 107  cd css/
// 108  nano main.css
// 109  nano screen.css
// 110  ls
// 111  cd ..
// 112  ls
// 113  cat index.html
// 114  ls
// 115  cd ..
// 116  ls
// 117  node web.js
// 118  npm install
// 119  node web.js
// 120  npm install engine.io
// 121  ls
// 122  clear
// 123  ls
// 124  nano package.json
// 125  npm install engine.io
// 126  node web.js
// 127  npm install node-static
// 128  node web.js
// 129  nano web.js
// 130  node web.js
// 131  ls
// 132  cd ..
// 133  ls
// 134  rmdir web
// 135  rmdir -r web
// 136  rm -r web
// 137  ls
// 138  mkdir web
// 139  cd web
// 140  ls
// 141  git clone https://github.com/martintajur/Engine.IO-app-boilerplate-example.git
//     142  ls
// 143  cd Engine.IO-app-boilerplate-example/
// 144  ls
// 145  node index.js
// 146  nano index.js
// 147  node index.js
// 148  ls
// 149  cd ..
// 150  ls
// 151  mkdir telly
// 152  cd telly/
// 153  ls
// 154  git clone https://github.com/yagop/node-telegram-bot-api.git
//     155  ls
// 156  cd node-telegram-bot-api/
// 157  ls
// 158  npm install
// 159  ls
// 160  node index.js
// 161  cd examples/
// 162  ls
// 163  cd game
// 164  ls
// 165  node game.js
// 166  nano game.
// 167  nano game.js
// 168  ls
// 169  cd ..
// 170  ls
// 171  cd ..
// 172  ls
// 173  cd ..
// 174  ls
// 175  mkdir node-telly
// 176  cd node-tel
// 177  cd node-telly
// 178  ls
// 179  clear
// 180  ls
// 181  npm install --save node-telegram-bot-api
// 182  ls
// 183  nano a.js
// 184  node a.js
// 185  clear
// 186  ls
// 187  nano a.js
// 188  ls
// 189  cd ..
// 190  ls
// 191  d ..
// 192  cd ..
// 193  ls
// 194  mkdir telebot
// 195  git clone https://github.com/mullwar/telebot.git
//     196  ls
// 197  cd telebot/
// 198  ls
// 199  npm install
// 200  ls
// 201  cd ..
// 202  ls
// 203  rm -r telly/
// 204  ls
// 205  mkdir telly
// 206  git clone https://github.com/zhukov/webogram.git > telly
//     207  cd telly/
// 208  git clone https://github.com/zhukov/webogram.git
//     209  ls
// 210  cd webogram/
// 211  ls
// 212  sudo npm install -g gulp
// 213  npm install
// 214  ls
// 215  nano app
// 216  cd app
// 217  ls
// 218  cd. .
// 219  ls
// 220  history | grep etc
// 221  nano /etc/nginx/sites-available/default
// 222  ls
// 223  cd ..
// 224  ls
// 225  cd .
// 226  cd ...
// 227  cd ..
// 228  ls
// 229  cd webogram/
// 230  ls
// 231  gulp watch
// 232  npm install gulp
// 233  gulp watch
// 234  npm install gulp
// 235  gulp watch
// 236  npm install gulp-load-plugins
// 237  gulp watch
// 238  npm install
// 239  npm install gulp-angular-templatecache
// 240  gulp watch
// 241  npm install gulp-gh-pages
// 242  ls
// 243  gulp watch
// 244  npm install gulp-grep-stream
// 245  gulp watch
// 246  npm install gulp-imagemin
// 247  gulp watch
// 248  npm install gulp-less
// 249  gulp watch
// 250  npm install gulp-livereload
// 251* gulp watc
// 252  npm install gulp-manifest
// 253  gulp watch
// 254  npm install gulp-minify-css
// 255  gulp watch
// 256  npm install gulp-minify-html
// 257  gulp watch
// 258  npm install gulp-ng-annotate
// 259  gulp watch
// 260  npm install gulp-replace
// 261  npm install gulp-install
// 262  npm install gulp
// 263  gulp watc
// 264  gulp watch
// 265  npm install gulp-rev
// 266  gulp watch
// 267  npm install gulp-standard
// 268  gulp watch
// 269  npm install gulp-uglify
// 270  gulp watch
// 271  npm install gulp-usemin
// 272  gulp watch
// 273  npm install gulp-zip
// 274  npm-install-all gulpfile.js
// 275  npm-install-all gulp
// 276  npm-install-all gulpfile
// 277  ls
// 278  npm intall-all gulpfile.js
// 279  npm install-all gulpfile.js
// 280  clear
// 281  ls
// 282  npm install -g gulpfile-install
// 283  gulp-install gulpfile.js
// 284  npm gulp-install gulpfile.js
// 285  gulp watch
// 286  npm install st
// 287  ls
// 288  npm install --save-dev
// 289  gulp watch
// 290  npm install run-sequence
// 291  gulp watch
// 292  npm install sw-prechache
// 293  npm install sw-precache
// 294  npm install sw-prechache
// 295  gulp watch
// 296  npm install karma
// 297  gulp watch
// 298  history