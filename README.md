# genslug / জেনস্লাগ

একটি URL-friendly Slug তৈরি করার জন্য ছোট্ট একটি লাইব্রেরি। যেটা বাংলা এবং ইংরেজি অক্ষরমালাতে ব্যবহার যোগ্য।

## Installation / ইন্সটেলেশন

```bash
npm install genslug  # Or yarn add genslug
```

## Usage / ব্যবহার
```js
import genslug from 'genslug';

const text = "This is a test string with some special characters!@#$%^ and  আমার সোনার বাংলা আমি তোমায় ভালোবাসি.";

const generatedSlug = genslug(text);

console.log(generatedSlug) // this-is-a-test-string-with-some-special-characters-and-আমার-সোনার-বাংলা-আমি-তোমায়-ভালোবাসি
```


## Be Cautious / সর্ক থাকুন
যদি আপনার স্ট্রিং টি কোনো সংখ্যা দিয়ে শুরু হয় তবে genslug লাইব্রেরি চূড়ান্ত ফলফলের শুরুতে স্বয়ংক্রিয় ভাবে **\_genslug\_** উপসর্গ হিসেবে যুক্ত হয়। 

**যেমন**
```js
import genslug from 'genslug';

const text = "10 আমার প্রিয় একটি সংখ্যা।"

const generatedSlug = genslug(text);

console.log(generatedSlug) // _genslug_10-আমার-প্রিয়-একটি-সংখ্যা

```

তবে আপনি যদি চান এই ধরণের ঘটনায় উপসর্গ হিসেবে **\_genslug\_** এর পরিবর্তে আপনার মন মতো কোনো লিখা আশুক। তবে আপনি সেটিও করতে পারবেন। 

এর জন্য দ্বিতীয় parameter এ আপনাকে সেটা বলে দিতে হবে। তবে খেয়াল রাখতে হবে দ্বিতীয় parameter অবশ্যই যাতে সংখ্যা দিয়ে না শুরু হয়।
 
**যেমন**
```js
import genslug from 'genslug';

const text = "10 আমার প্রিয় একটি সংখ্যা।"

const generatedSlug = genslug(text, 'proah');

console.log(generatedSlug) // proah10-আমার-প্রিয়-একটি-সংখ্যা
```