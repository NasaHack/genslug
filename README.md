# Sugify / সাগিফাই

একটি URL-friendly Slug তৈরি করার জন্য ছোট্ট একটি লাইব্রেরি। যেটা বাংলা এবং ইংরেজি অক্ষরমালাতে ব্যবহার যোগ্য।

## Installation / ইন্সটেলেশন

```bash
npm install sugify  # Or yarn add sugify
```

## Usage / ব্যবহার
```js
import sugify from 'sugify';

const text = "This is a test string with some special characters!@#$%^ and  আমার সোনার বাংলা আমি তোমায় ভালোবাসি.";

const generatedSlug = sugify(text);

console.log(generatedSlug) // this-is-a-test-string-with-some-special-characters-and-আমার-সোনার-বাংলা-আমি-তোমায়-ভালোবাসি
```


## Be Cautious / সর্ক থাকুন
যদি আপনার স্ট্রিং টি কোনো সংখ্যা দিয়ে শুরু হয় তবে sugify লাইব্রেরি চূড়ান্ত ফলফলের শুরুতে স্বয়ংক্রিয় ভাবে _sugify_ উপসর্গ হিসেবে যুক্ত হয়। 

**যেমন**
```js
import sugify from 'sugify';

const text = "10 আমার প্রিয় একটি সংখ্যা।"

const generatedSlug = sugify(text);

console.log(generatedSlug) // _sugify_10-আমার-প্রিয়-একটি-সংখ্যা

```

তবে আপনি যদি চান এই ধরণের ঘটনায় উপসর্গ হিসেবে _sugify_ এর পরিবর্তে আপনার মন মতো কোনো লিখা আশুক। তবে আপনি সেটিও করতে পারবেন। 

এর জন্য দ্বিতীয় parameter এ আপনাকে সেটা বলে দিতে হবে। তবে খেয়াল রাখতে হবে দ্বিতীয় parameter অবশ্যই যাতে সংখ্যা দিয়ে না শুরু হয়।
 
**যেমন**
```js
import sugify from 'sugify';

const text = "10 আমার প্রিয় একটি সংখ্যা।"

const generatedSlug = sugify(text, 'proah');

console.log(generatedSlug) // proah10-আমার-প্রিয়-একটি-সংখ্যা
```