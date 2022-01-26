<p align="center">
<img src="https://github.com/Ahelsamahy/RESTful-API-in-NodeJs/blob/main/postman_with_db.png?raw=true" >

</p>



<p align="center">
    <a href="https://github.com/Ahelsamahy/RESTful-API-in-NodeJs/commits/master">
    <img src="https://img.shields.io/github/last-commit/Ahelsamahy/RESTful-API-in-NodeJs"
         alt="GitHub last commit">
    <a href="https://saythanks.io/to/Ahelsamahy">
    <img src="https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg"
         alt="Say thanks">
</p>

<p align="center">
  <a href="#How-it-works">How it Works</a> •
  <a href="#Installation">Installation</a> •
  <a href="#emailware">Emailware</a> •
  <a href="#license">License</a>
</p>

---

# How-it-works
Starts with checking the connection to database then show `Server listening at port 3000` for the port and `Connected to Database!` if everything is ok with the connection to database.

Switching to Postman and using the 4 main functions CRUD (Create, Read, Update, Delete) with the commands (Post,Get,Put,Delete) sequentially.

#### Functionality:

1. Create (Post): uses a procedure in Database called `carAdd()` that adds the `carID` automatically as an increment number so there won't be duplication.

<p align="center">
<img src="https://github.com/Ahelsamahy/RESTful-API-in-NodeJs/blob/main/used%20gifs/POST.gif?raw=true" >

2. Read (Get): has normal function that shows all the cars or you can find car by its own ID using `/cars/id`

<p align="center">
<img src="https://github.com/Ahelsamahy/RESTful-API-in-NodeJs/blob/main/used%20gifs/GET.gif?raw=true" >

3. Update (Put): uses a procedure in Database called `carEdit()` that searches by the `carID` then updates the other fields and output `car is updated`.

<p align="center">
<img src="https://github.com/Ahelsamahy/RESTful-API-in-NodeJs/blob/main/used%20gifs/PUT.gif?raw=true" >

4. Delete (Delete): a simple SQL statement that finds the car by `carID` then shows that operation is done.

<p align="center">
<img src="https://github.com/Ahelsamahy/RESTful-API-in-NodeJs/blob/main/used%20gifs/DELETE.gif?raw=true" >


# Installation

You will need to have  [mysql][1], [express][2], [body-parser][3] packages and [DBeaver][4] for managing the database .

1. Clone this repository
```shell
$ git clone https://github.com/Ahelsamahy/RESTful-API-in-NodeJs
$ cd RESTful-API-in-NodeJs
```

2. install `package.json`
```shell
$ npm init
```

3. download latest version of required packages

``` shell
npm install express mysql body-parser
```
> ⚠️ Best to specify the version of packages using `npm install express@4.17.2 mysql@2.18.1 body-parser@1.19.1` as these are the latest version that I'm using.


[1]: https://www.npmjs.com/package/mysql
[2]: https://www.npmjs.com/package/express
[3]: https://www.npmjs.com/package/body-parser
[4]: https://dbeaver.io/download/ "download Dbeaver"

4. Read the database file using Dbeaver [optional]

# Emailware
RESTful-API-in-NodeJs is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you send me an email at <ahmelsamahy@gmail.com> about anything you'd want to say about this software. I'd really appreciate it!

# License
If you have project similar to this which you will use this instead in it or you may use this project, don't forget to mention me or send me email about it.