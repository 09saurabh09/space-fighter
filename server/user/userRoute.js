
'use strict';

let express = require('express');

let router = express.Router();

/* GET: Generate OTP */
router.get('/', (req, res, next) => {
    let data = [{
        "id": 1,
        "first_name": "Daniel",
        "last_name": "Ramos",
        "email": "dramos0@trellian.com",
        "gender": "Male",
        "ip_address": "188.70.152.200"
    }, {
        "id": 2,
        "first_name": "Nicole",
        "last_name": "Morales",
        "email": "nmorales1@behance.net",
        "gender": "Female",
        "ip_address": "239.88.129.115"
    }, {
        "id": 3,
        "first_name": "Stephen",
        "last_name": "Price",
        "email": "sprice2@posterous.com",
        "gender": "Male",
        "ip_address": "47.250.52.230"
    }, {
        "id": 4,
        "first_name": "Robin",
        "last_name": "Russell",
        "email": "rrussell3@netvibes.com",
        "gender": "Female",
        "ip_address": "111.35.255.240"
    }, {
        "id": 5,
        "first_name": "William",
        "last_name": "Hansen",
        "email": "whansen4@about.me",
        "gender": "Male",
        "ip_address": "75.187.161.245"
    }, {
        "id": 6,
        "first_name": "Carlos",
        "last_name": "Lynch",
        "email": "clynch5@netlog.com",
        "gender": "Male",
        "ip_address": "59.74.97.207"
    }, {
        "id": 7,
        "first_name": "Theresa",
        "last_name": "Hudson",
        "email": "thudson6@walmart.com",
        "gender": "Female",
        "ip_address": "37.90.208.192"
    }, {
        "id": 8,
        "first_name": "Martha",
        "last_name": "Moore",
        "email": "mmoore7@t.co",
        "gender": "Female",
        "ip_address": "5.116.77.255"
    }, {
        "id": 9,
        "first_name": "Anthony",
        "last_name": "Dixon",
        "email": "adixon8@linkedin.com",
        "gender": "Male",
        "ip_address": "120.233.236.10"
    }, {
        "id": 10,
        "first_name": "Martin",
        "last_name": "Little",
        "email": "mlittle9@usgs.gov",
        "gender": "Male",
        "ip_address": "219.201.238.178"
    }, {
        "id": 11,
        "first_name": "Todd",
        "last_name": "Ramos",
        "email": "tramosa@1688.com",
        "gender": "Male",
        "ip_address": "88.141.123.142"
    }, {
        "id": 12,
        "first_name": "Jason",
        "last_name": "Ramos",
        "email": "jramosb@skype.com",
        "gender": "Male",
        "ip_address": "221.64.96.122"
    }, {
        "id": 13,
        "first_name": "Carlos",
        "last_name": "Barnes",
        "email": "cbarnesc@nytimes.com",
        "gender": "Male",
        "ip_address": "142.82.59.105"
    }, {
        "id": 14,
        "first_name": "Diane",
        "last_name": "Montgomery",
        "email": "dmontgomeryd@globo.com",
        "gender": "Female",
        "ip_address": "15.47.215.178"
    }, {
        "id": 15,
        "first_name": "Frances",
        "last_name": "Rivera",
        "email": "friverae@etsy.com",
        "gender": "Female",
        "ip_address": "240.20.209.34"
    }, {
        "id": 16,
        "first_name": "Jessica",
        "last_name": "Hicks",
        "email": "jhicksf@scribd.com",
        "gender": "Female",
        "ip_address": "101.98.140.132"
    }, {
        "id": 17,
        "first_name": "Sara",
        "last_name": "Gordon",
        "email": "sgordong@mapquest.com",
        "gender": "Female",
        "ip_address": "23.212.231.100"
    }, {
        "id": 18,
        "first_name": "Nicole",
        "last_name": "Ruiz",
        "email": "nruizh@fotki.com",
        "gender": "Female",
        "ip_address": "188.157.132.76"
    }, {
        "id": 19,
        "first_name": "Jeremy",
        "last_name": "Wilson",
        "email": "jwilsoni@jalbum.net",
        "gender": "Male",
        "ip_address": "248.86.210.184"
    }, {
        "id": 20,
        "first_name": "Frances",
        "last_name": "Warren",
        "email": "fwarrenj@google.de",
        "gender": "Female",
        "ip_address": "214.131.180.20"
    }, {
        "id": 21,
        "first_name": "Helen",
        "last_name": "Mills",
        "email": "hmillsk@acquirethisname.com",
        "gender": "Female",
        "ip_address": "143.245.54.58"
    }, {
        "id": 22,
        "first_name": "Joshua",
        "last_name": "Moreno",
        "email": "jmorenol@github.com",
        "gender": "Male",
        "ip_address": "150.112.127.35"
    }, {
        "id": 23,
        "first_name": "Philip",
        "last_name": "Moreno",
        "email": "pmorenom@wix.com",
        "gender": "Male",
        "ip_address": "171.175.127.118"
    }, {
        "id": 24,
        "first_name": "Anne",
        "last_name": "Alexander",
        "email": "aalexandern@buzzfeed.com",
        "gender": "Female",
        "ip_address": "83.239.116.81"
    }, {
        "id": 25,
        "first_name": "Judith",
        "last_name": "Lawson",
        "email": "jlawsono@telegraph.co.uk",
        "gender": "Female",
        "ip_address": "225.210.165.50"
    }, {
        "id": 26,
        "first_name": "Timothy",
        "last_name": "Diaz",
        "email": "tdiazp@ca.gov",
        "gender": "Male",
        "ip_address": "47.153.3.169"
    }, {
        "id": 27,
        "first_name": "Anthony",
        "last_name": "Hansen",
        "email": "ahansenq@moonfruit.com",
        "gender": "Male",
        "ip_address": "104.242.33.95"
    }, {
        "id": 28,
        "first_name": "Clarence",
        "last_name": "Ferguson",
        "email": "cfergusonr@comcast.net",
        "gender": "Male",
        "ip_address": "216.23.64.92"
    }, {
        "id": 29,
        "first_name": "Andrew",
        "last_name": "Reid",
        "email": "areids@51.la",
        "gender": "Male",
        "ip_address": "71.204.55.173"
    }, {
        "id": 30,
        "first_name": "Craig",
        "last_name": "Scott",
        "email": "cscottt@blogger.com",
        "gender": "Male",
        "ip_address": "30.243.9.119"
    }, {
        "id": 31,
        "first_name": "Anthony",
        "last_name": "Young",
        "email": "ayoungu@mysql.com",
        "gender": "Male",
        "ip_address": "4.29.27.222"
    }, {
        "id": 32,
        "first_name": "Melissa",
        "last_name": "Stephens",
        "email": "mstephensv@mtv.com",
        "gender": "Female",
        "ip_address": "202.117.205.176"
    }, {
        "id": 33,
        "first_name": "Adam",
        "last_name": "Cox",
        "email": "acoxw@disqus.com",
        "gender": "Male",
        "ip_address": "95.60.189.47"
    }, {
        "id": 34,
        "first_name": "Daniel",
        "last_name": "Kelly",
        "email": "dkellyx@joomla.org",
        "gender": "Male",
        "ip_address": "157.205.140.178"
    }, {
        "id": 35,
        "first_name": "Steven",
        "last_name": "Johnston",
        "email": "sjohnstony@noaa.gov",
        "gender": "Male",
        "ip_address": "202.228.239.230"
    }, {
        "id": 36,
        "first_name": "Julia",
        "last_name": "Morris",
        "email": "jmorrisz@blogger.com",
        "gender": "Female",
        "ip_address": "102.230.216.123"
    }, {
        "id": 37,
        "first_name": "Arthur",
        "last_name": "Welch",
        "email": "awelch10@nbcnews.com",
        "gender": "Male",
        "ip_address": "179.141.198.73"
    }, {
        "id": 38,
        "first_name": "Carolyn",
        "last_name": "Foster",
        "email": "cfoster11@symantec.com",
        "gender": "Female",
        "ip_address": "127.75.49.245"
    }, {
        "id": 39,
        "first_name": "Bonnie",
        "last_name": "Vasquez",
        "email": "bvasquez12@hostgator.com",
        "gender": "Female",
        "ip_address": "37.74.104.58"
    }, {
        "id": 40,
        "first_name": "Douglas",
        "last_name": "Lopez",
        "email": "dlopez13@goodreads.com",
        "gender": "Male",
        "ip_address": "22.105.160.157"
    }, {
        "id": 41,
        "first_name": "Michelle",
        "last_name": "Dunn",
        "email": "mdunn14@liveinternet.ru",
        "gender": "Female",
        "ip_address": "126.121.66.199"
    }, {
        "id": 42,
        "first_name": "Kathy",
        "last_name": "Cunningham",
        "email": "kcunningham15@state.tx.us",
        "gender": "Female",
        "ip_address": "48.113.103.133"
    }, {
        "id": 43,
        "first_name": "Kathryn",
        "last_name": "Simmons",
        "email": "ksimmons16@scientificamerican.com",
        "gender": "Female",
        "ip_address": "92.219.227.138"
    }, {
        "id": 44,
        "first_name": "Richard",
        "last_name": "Ferguson",
        "email": "rferguson17@com.com",
        "gender": "Male",
        "ip_address": "79.207.55.55"
    }, {
        "id": 45,
        "first_name": "Diana",
        "last_name": "Baker",
        "email": "dbaker18@time.com",
        "gender": "Female",
        "ip_address": "53.128.150.108"
    }, {
        "id": 46,
        "first_name": "Jacqueline",
        "last_name": "Warren",
        "email": "jwarren19@usa.gov",
        "gender": "Female",
        "ip_address": "29.129.180.79"
    }, {
        "id": 47,
        "first_name": "Anne",
        "last_name": "Ortiz",
        "email": "aortiz1a@mlb.com",
        "gender": "Female",
        "ip_address": "233.14.151.253"
    }, {
        "id": 48,
        "first_name": "Dorothy",
        "last_name": "Bradley",
        "email": "dbradley1b@bing.com",
        "gender": "Female",
        "ip_address": "133.102.5.129"
    }, {
        "id": 49,
        "first_name": "Chris",
        "last_name": "Montgomery",
        "email": "cmontgomery1c@berkeley.edu",
        "gender": "Male",
        "ip_address": "80.131.249.14"
    }, {
        "id": 50,
        "first_name": "Henry",
        "last_name": "Perez",
        "email": "hperez1d@webeden.co.uk",
        "gender": "Male",
        "ip_address": "68.179.214.74"
    }, {
        "id": 51,
        "first_name": "Antonio",
        "last_name": "Morrison",
        "email": "amorrison1e@paginegialle.it",
        "gender": "Male",
        "ip_address": "125.231.23.158"
    }, {
        "id": 52,
        "first_name": "Eugene",
        "last_name": "Jackson",
        "email": "ejackson1f@fotki.com",
        "gender": "Male",
        "ip_address": "47.240.20.246"
    }, {
        "id": 53,
        "first_name": "Sharon",
        "last_name": "Lopez",
        "email": "slopez1g@topsy.com",
        "gender": "Female",
        "ip_address": "92.38.86.196"
    }, {
        "id": 54,
        "first_name": "Deborah",
        "last_name": "Duncan",
        "email": "dduncan1h@webeden.co.uk",
        "gender": "Female",
        "ip_address": "34.86.146.56"
    }, {
        "id": 55,
        "first_name": "Denise",
        "last_name": "Hanson",
        "email": "dhanson1i@wisc.edu",
        "gender": "Female",
        "ip_address": "51.58.243.51"
    }, {
        "id": 56,
        "first_name": "Mark",
        "last_name": "Cruz",
        "email": "mcruz1j@google.es",
        "gender": "Male",
        "ip_address": "234.182.255.66"
    }, {
        "id": 57,
        "first_name": "Phillip",
        "last_name": "Davis",
        "email": "pdavis1k@netvibes.com",
        "gender": "Male",
        "ip_address": "184.158.117.26"
    }, {
        "id": 58,
        "first_name": "Debra",
        "last_name": "Coleman",
        "email": "dcoleman1l@goo.gl",
        "gender": "Female",
        "ip_address": "117.230.184.19"
    }, {
        "id": 59,
        "first_name": "Alan",
        "last_name": "Rodriguez",
        "email": "arodriguez1m@skyrock.com",
        "gender": "Male",
        "ip_address": "127.47.242.26"
    }, {
        "id": 60,
        "first_name": "Stephanie",
        "last_name": "Gutierrez",
        "email": "sgutierrez1n@zimbio.com",
        "gender": "Female",
        "ip_address": "35.171.40.193"
    }, {
        "id": 61,
        "first_name": "Christopher",
        "last_name": "Medina",
        "email": "cmedina1o@wunderground.com",
        "gender": "Male",
        "ip_address": "135.88.84.201"
    }, {
        "id": 62,
        "first_name": "Jeffrey",
        "last_name": "Price",
        "email": "jprice1p@hhs.gov",
        "gender": "Male",
        "ip_address": "254.116.87.139"
    }, {
        "id": 63,
        "first_name": "James",
        "last_name": "Woods",
        "email": "jwoods1q@omniture.com",
        "gender": "Male",
        "ip_address": "55.85.94.50"
    }, {
        "id": 64,
        "first_name": "Kevin",
        "last_name": "Montgomery",
        "email": "kmontgomery1r@ehow.com",
        "gender": "Male",
        "ip_address": "36.62.231.23"
    }, {
        "id": 65,
        "first_name": "Cheryl",
        "last_name": "Nichols",
        "email": "cnichols1s@pinterest.com",
        "gender": "Female",
        "ip_address": "60.220.197.91"
    }, {
        "id": 66,
        "first_name": "Sarah",
        "last_name": "Garza",
        "email": "sgarza1t@example.com",
        "gender": "Female",
        "ip_address": "101.180.123.83"
    }, {
        "id": 67,
        "first_name": "Arthur",
        "last_name": "Willis",
        "email": "awillis1u@ezinearticles.com",
        "gender": "Male",
        "ip_address": "150.106.225.244"
    }, {
        "id": 68,
        "first_name": "George",
        "last_name": "Hughes",
        "email": "ghughes1v@hud.gov",
        "gender": "Male",
        "ip_address": "105.198.54.176"
    }, {
        "id": 69,
        "first_name": "Christine",
        "last_name": "Wallace",
        "email": "cwallace1w@weather.com",
        "gender": "Female",
        "ip_address": "240.164.179.183"
    }, {
        "id": 70,
        "first_name": "Benjamin",
        "last_name": "Miller",
        "email": "bmiller1x@ucoz.ru",
        "gender": "Male",
        "ip_address": "229.200.9.192"
    }, {
        "id": 71,
        "first_name": "Andrea",
        "last_name": "Hanson",
        "email": "ahanson1y@surveymonkey.com",
        "gender": "Female",
        "ip_address": "55.204.65.74"
    }, {
        "id": 72,
        "first_name": "Justin",
        "last_name": "Meyer",
        "email": "jmeyer1z@java.com",
        "gender": "Male",
        "ip_address": "79.88.7.251"
    }, {
        "id": 73,
        "first_name": "Ryan",
        "last_name": "Williamson",
        "email": "rwilliamson20@themeforest.net",
        "gender": "Male",
        "ip_address": "147.29.159.185"
    }, {
        "id": 74,
        "first_name": "Timothy",
        "last_name": "Cunningham",
        "email": "tcunningham21@squidoo.com",
        "gender": "Male",
        "ip_address": "201.41.90.199"
    }, {
        "id": 75,
        "first_name": "Sara",
        "last_name": "Rodriguez",
        "email": "srodriguez22@angelfire.com",
        "gender": "Female",
        "ip_address": "107.250.85.26"
    }, {
        "id": 76,
        "first_name": "Carl",
        "last_name": "Jones",
        "email": "cjones23@pinterest.com",
        "gender": "Male",
        "ip_address": "114.190.63.95"
    }, {
        "id": 77,
        "first_name": "Julia",
        "last_name": "Rodriguez",
        "email": "jrodriguez24@jiathis.com",
        "gender": "Female",
        "ip_address": "166.52.208.174"
    }, {
        "id": 78,
        "first_name": "Irene",
        "last_name": "Ward",
        "email": "iward25@drupal.org",
        "gender": "Female",
        "ip_address": "71.13.44.248"
    }, {
        "id": 79,
        "first_name": "David",
        "last_name": "Gutierrez",
        "email": "dgutierrez26@nytimes.com",
        "gender": "Male",
        "ip_address": "98.200.111.183"
    }, {
        "id": 80,
        "first_name": "Randy",
        "last_name": "Martinez",
        "email": "rmartinez27@ycombinator.com",
        "gender": "Male",
        "ip_address": "18.101.178.236"
    }, {
        "id": 81,
        "first_name": "Carl",
        "last_name": "Cunningham",
        "email": "ccunningham28@uol.com.br",
        "gender": "Male",
        "ip_address": "41.89.137.155"
    }, {
        "id": 82,
        "first_name": "Karen",
        "last_name": "Palmer",
        "email": "kpalmer29@youtu.be",
        "gender": "Female",
        "ip_address": "102.137.88.214"
    }, {
        "id": 83,
        "first_name": "Helen",
        "last_name": "Bradley",
        "email": "hbradley2a@google.fr",
        "gender": "Female",
        "ip_address": "246.209.88.230"
    }, {
        "id": 84,
        "first_name": "Aaron",
        "last_name": "Reyes",
        "email": "areyes2b@indiegogo.com",
        "gender": "Male",
        "ip_address": "39.15.17.15"
    }, {
        "id": 85,
        "first_name": "Jessica",
        "last_name": "Hunter",
        "email": "jhunter2c@thetimes.co.uk",
        "gender": "Female",
        "ip_address": "25.0.118.160"
    }, {
        "id": 86,
        "first_name": "Harold",
        "last_name": "Holmes",
        "email": "hholmes2d@g.co",
        "gender": "Male",
        "ip_address": "108.168.254.11"
    }, {
        "id": 87,
        "first_name": "Edward",
        "last_name": "Miller",
        "email": "emiller2e@reference.com",
        "gender": "Male",
        "ip_address": "175.212.149.241"
    }, {
        "id": 88,
        "first_name": "Donald",
        "last_name": "Morales",
        "email": "dmorales2f@jigsy.com",
        "gender": "Male",
        "ip_address": "43.75.8.134"
    }, {
        "id": 89,
        "first_name": "Cheryl",
        "last_name": "Harrison",
        "email": "charrison2g@ucoz.ru",
        "gender": "Female",
        "ip_address": "214.130.239.7"
    }, {
        "id": 90,
        "first_name": "Nicole",
        "last_name": "Banks",
        "email": "nbanks2h@nymag.com",
        "gender": "Female",
        "ip_address": "10.195.231.94"
    }, {
        "id": 91,
        "first_name": "Joshua",
        "last_name": "Weaver",
        "email": "jweaver2i@reverbnation.com",
        "gender": "Male",
        "ip_address": "190.69.212.112"
    }, {
        "id": 92,
        "first_name": "John",
        "last_name": "Williamson",
        "email": "jwilliamson2j@yelp.com",
        "gender": "Male",
        "ip_address": "54.81.69.43"
    }, {
        "id": 93,
        "first_name": "Sean",
        "last_name": "Robinson",
        "email": "srobinson2k@fda.gov",
        "gender": "Male",
        "ip_address": "159.173.76.2"
    }, {
        "id": 94,
        "first_name": "Eric",
        "last_name": "Perez",
        "email": "eperez2l@nasa.gov",
        "gender": "Male",
        "ip_address": "100.158.159.51"
    }, {
        "id": 95,
        "first_name": "Nicholas",
        "last_name": "Moreno",
        "email": "nmoreno2m@storify.com",
        "gender": "Male",
        "ip_address": "56.78.97.168"
    }, {
        "id": 96,
        "first_name": "Paula",
        "last_name": "Hayes",
        "email": "phayes2n@webs.com",
        "gender": "Female",
        "ip_address": "106.42.11.168"
    }, {
        "id": 97,
        "first_name": "Dennis",
        "last_name": "Sims",
        "email": "dsims2o@blog.com",
        "gender": "Male",
        "ip_address": "41.86.90.185"
    }, {
        "id": 98,
        "first_name": "Rebecca",
        "last_name": "Harris",
        "email": "rharris2p@economist.com",
        "gender": "Female",
        "ip_address": "40.117.132.229"
    }, {
        "id": 99,
        "first_name": "Ernest",
        "last_name": "Hanson",
        "email": "ehanson2q@artisteer.com",
        "gender": "Male",
        "ip_address": "22.95.47.102"
    }, {
        "id": 100,
        "first_name": "Sara",
        "last_name": "Stevens",
        "email": "sstevens2r@redcross.org",
        "gender": "Female",
        "ip_address": "8.36.132.152"
    }];

    res.status(200).send(data);
});

module.exports = router;