# Telephone number validator

Returns true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

You may provide a string such as 800-692-7753 or 8oo-six427676;laskdjf. This script validates or rejects the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, it confirms that the country code is 1. Returns true if the string is a valid US phone number; otherwise returns false.

#### For more info and examples on this challenge, visit: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator 