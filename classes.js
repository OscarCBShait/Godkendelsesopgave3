class creditcard {
    constructor(Cardholder, CVC, Cardnumber, ExpiryDate){
    this.Cardholder = Cardholder;
    this.CVC = CVC;
    this.Cardnumber = Cardnumber;
    this.ExpiryDate = ExpiryDate;
}}
class interest {
    constructor(Sport, Hobby, FavoriteShow){
    this.Sport = Sport;
    this.Hobby = Hobby;
    this.FavoriteShow = FavoriteShow;
}}
class match {
    constructor(Match1, Match2, Match3){
        this.Match1 = Match1;
        this.Match2 = Match2;
        this.Match3 = Match3;

    }}
class image {
    constructor(width, height){
        this.width = width;
        this.height = height;
}}

Visa = new creditcard('Mads Hansen', 701, 631723789061, 10/21);
MadsInterest = new interest('Soccer', 'Gaming', 'Family Guy');
MadsMatch = new match('Sandra', 'Lanette', 'Mille');
MadsPicture = new image(100, 200);

console.log(Visa, MadsInterest, MadsMatch, MadsPicture);