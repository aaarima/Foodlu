# README

[foodlu](https://foodlu.herokuapp.com) is a video streaming app based on the design of Hulu but only for
food based entertainment. Like hulu, you can login/sign up and watch videos. The app is currently hosted on 
heroku.

[Link to site](https://foodlu.herokuapp.com)

## Key Features
Some features that are currently implemented on the site. 

### Dynamic User Auth
- Webpage tracks changes in user input display error messages accordingly. 
- Errors are only shown when input box is selected 
![Image from Gyazo](https://i.gyazo.com/bbee271333fd4189a1f9e4638eb131a3.gif)

### Video watching 
- Both sample movies and TV series are hosted on foodlu. TV series contain
episodes while movies can be watched directly from the show page. 

## Deployment Instructions
- ruby version `2.5.1p57`
- `bundle install`
- `npm install`
- `bundle exec rails db:setup`
- `bundle exec rails s`

Note that you will need to host your own images/videos. 

## Future Directions
- Watchlists
- Search
- Genre show page

## Contact Info:
- Email: `aaarima@yahoo.com`

Things you may want to cover:
