dbPassword =
  "mongodb+srv://shivam:" +
  encodeURIComponent("test123") +
  "@cluster0.tnzdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

 // mongodb+srv://shivam:<password>@cluster0.tnzdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

module.exports = {
  mongoURI: dbPassword,
};