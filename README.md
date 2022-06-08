## Important

I have done this challenge in two branchs

[frontend](https://github.com/lucca257/challenge-turnoverbnb-front) : VueJs

[backend](https://github.com/lucca257/challenge-turnoverbnb-backend) : Laravel

this project was all deployed to be tested online, so if you guys would like to see more about the project feel conformable to access the [website](https://challenge-turnoverbnb-front.vercel.app/)

## Developed in:
[VueJs](https://laravel.com/docs/9.x) (9)

## Requirements:
1. [Node](https://www.php.net/) (8.1)
2. [Npm](https://www.mysql.com) (8)

### Instructions for installing the project:

this project is dockerized, to start the project just run the command below with docker:
```sh
docker-compose up
```

### What I have done ?

authentication
- [x] register user
- [x] login user
- [x] logout user
- [x] middleware to check user token
- [x] middleware to check user role

customer
- [x] list all transactions by user and date
- [x] list all deposits by user and date
- [x] create deposit
- [x] list all purchases by user and date
- [x] create purchase
- [x] route to show user image

admin
- [x] list all pending deposits
- [x] details of user deposit
- [x] review user deposit
- [x] route to show image

# notes

In this project, I have tried to create and reuse a lot of components to the max that I could. I have implemented a basic authentication service.

I would like to split some methods into services to reuse with other components and use vuex to store the state between components.

I would like to do a battering style to have more compatibility with mobile.
