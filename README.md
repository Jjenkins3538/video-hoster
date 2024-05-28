## About the project
This project is designed to be a relatively simple and cheap video hosting site for your own memories, able to upload and stream videos at scale, in the browser


## Installation Steps

- Within your root directory, run git clone https://github.com/Jjenkins3538/video-hoster.git
- composer install
- npm install
- create .env file and copy over contents from .env.example (run cp .env.example .env in your CLI)
- php artisan key:generate
- configure your local DB name
- php artisan migrate

## License

This repo is licensed under the [MIT license](https://opensource.org/licenses/MIT).
