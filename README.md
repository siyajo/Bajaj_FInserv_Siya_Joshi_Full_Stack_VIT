# BFHL API

This is a REST API built for the BFHL assignment.

## API Endpoint
- POST `/bfhl`

## Request Example
```json
{
  "data": ["a","1","334","4","R","$"]
}
```
## Response Example
{
  "is_success": true,
  "user_id": "siya_joshi_09112004",
  "email": "xyz@gmail.com",
  "roll_number": "22BCE3614",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

