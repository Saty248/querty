
# Q.W.E.R.T.Y real time chat server

Q.W.E.R.T.Y is a web application which can be used to communicate in specific rooms.





## Authors

- [@Saty248](https://www.github.com/Saty248) -Sayantan Mondal


## Badges



[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/amo/dw/facebook)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/node/v/passport/latest?style=plastic)](http://www.gnu.org/licenses/agpl-3.0)


## Contributing

Contributions are always welcome!

Feel free to raise a pull request for any bugs which needs to be fixed.


## Deployment and Installation

To deploy this project download the source code.
inside the terminal change directory to the backend folder.

Run
```bash
  npm install
  npm run start
```

if you want to run the server as a container install docker and run
```bash
    docker build -t querty-image .
    docker run -d -p 3000:3000 --name querty querty-image
```
this will start the server.

open the index.html file from the browser.



## Documentation

Open the index.html file which is located inside the frontend folder and enter the username and select the room and then join the room.


## Features

- real-time chat server.
- no extra storage space for database
- it has rooms for personalized conversation
 






    
## License

[MIT](https://choosealicense.com/licenses/mit/)


![Logo](https://toppng.com/uploads/preview/font-awesome-smile-11549856135ynulwgcqff.png)


## Feedback

If you have any feedback, please reach out to me at my gmail mondal.sayantan1234@gmail.com


## Tech Stack

**Client:** html5, css3, vanilla javascript

**Server:** Node, Express, socket.io, zest, docker


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

you can  create test cases in the folder test 