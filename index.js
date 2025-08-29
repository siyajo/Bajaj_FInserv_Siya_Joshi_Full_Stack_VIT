const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.json());
const full_name="Siya Joshi";
const DOB="09112004";
const email="xyz@gmail.com";
const roll_no="22BCE3614";
function f1(str1){
    let res="";
    let upper=true;
    for(let i=str1.length-1;i>=0;i--){
        res+=upper? str1[i].toUpperCase():str[i].toLowerCase();
        upper=!upper;
    }
    return res;
}
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];

    let even = [], odd = [], alphabets = [], specials = [];
    let sum = 0;
    let alphaString = "";

    data.forEach(item => {
      if (/^\d+$/.test(item)) { // numbers
        let num = parseInt(item);
        if (num % 2 === 0) {
          even.push(item.toString());
        } else {
          odd.push(item.toString());
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) { // alphabets
        alphabets.push(item.toUpperCase());
        alphaString += item;
      } else {
        specials.push(item);
      }
    });

    res.status(200).json({
      is_success: true,
      user_id: `${full_name}_${DOB}`,
      email: EMAIL,
      roll_no: ROLL_NUMBER,
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alphabets,
      special_characters: specials,
      sum: sum.toString(),
      concat_string: f1(alphaString)
    });

  } catch (err) {
    res.status(500).json({
      is_success: false,
      error: err.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));